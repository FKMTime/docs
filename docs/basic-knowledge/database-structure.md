---
sidebar_position: 11
---

# Database structure

FKMTime uses PostgreSQL database to store all the data. The source of truth is
[`backend/prisma/schema.prisma`](https://github.com/FKMTime/FKMTime/blob/main/backend/prisma/schema.prisma)
in the FKMTime repository; this page describes the tables in it.

:::note
We use Prisma ORM to interact with the database. You can read more about Prisma [here](https://www.prisma.io/).
:::

:::info
We are using camelCase in our code, although the database is using snake_case. Prisma is taking care of the conversion using `@map`.
:::

:::info
We are using UUIDs as primary keys for all tables.
:::

## Tables

### Competition

There is one record in this table. It stores the competition settings, WCIF and other general data. Most of the data in this table is inserted during the import from the WCA website.

- `id` - unique identifier
- `name` - competition name
- `wcaId` - WCA competition ID
- `countryIso2` - country ISO2 code
- `wcif` - JSON, stores public WCIF of the competition
- `sendingResultsFrequency` - [SendingResultsFrequency](#sendingresultsfrequency), how often results are sent
- `scoretakingToken` - token taken from WCA Live for entering results
- `scoretakingTokenUpdatedAt` - date the scoretaking token was last saved
- `wcaScoretakingSoftware` - the competition's scoretaking software as set on the WCA website, null until first read
- `wcaScoretakingCheckedAt` - date FKMTime last read it
- `wcaLiveConnectedById`, `wcaLiveConnectedWcaUserId`, `wcaLiveConnectedName` - the account results are entered as in WCA integrated live results
- `wcaLiveCanEnterScores` - boolean, if that account can enter scores
- `wcaLiveAccessToken`, `wcaLiveRefreshToken` - encrypted tokens of that account
- `wcaLiveTokenExpiresAt` - date the access token expires
- `wcaLiveConnectionBrokenAt` - date the connection stopped working, if it did
- `openRoundsAutomatically` - boolean, if FKMTime opens later rounds in WCA integrated live results itself (off: a person does it)
- `cubingContestsToken` - token taken from Cubing Contests for entering results
- `defaultLocale` - default language of the panel
- `shouldUpdateDevices` - boolean, if the devices should be updated with new releases
- `shouldChangeGroupsAutomatically` - boolean, if the groups should be changed automatically
- `wifiSsid` - Wi-Fi SSID that FKMTime devices will be using to connect to micro-connector
- `wifiPassword` - Wi-Fi password
- `mdns` - boolean, whether mDNS should be used to discover the server
- `wsUrl` - websocket URL if mDNS is not used
- `fkmToken` - token that FKMTime devices use
- `secureRfid` - boolean, if secure RFID is used
- `useFkmTimeDevices` - boolean, if the competition uses FKMTime devices
- `soundEnabled` - boolean, if devices play sounds
- `buzzerVolume` - buzzer volume for v4 stations, null leaves each station on its own setting

### UnofficialEvent

This table stores unofficial events that are held during the competition.

- `id` - unique identifier
- `eventId` - id taken from `backend/src/events.ts`
- `wcif` - event data in WCIF format (stored as JSON)
- `createdAt` - date of creation
- `updatedAt` - date of last update

### Room

This table stores rooms taken from WCIF during import.

- `id` - unique identifier
- `name` - room name
- `color` - room color
- `currentGroupIds` - array of WCIF group IDs that are currently taking place in the room, may be empty
- `startedGroupIds` - array of every WCIF group ID the room has started, so a round counts as over only once all of its groups have run
- `createdAt` - date of creation
- `updatedAt` - date of last update

### Device

This table stores data about all FKMTime devices that are connected to the system.

- `id` - unique identifier
- `name` - device name, can be changed
- `espId` - ESP32 device ID
- `signKey` - key the device signs its messages with
- `type` - [DeviceType](#devicetype)
- `batteryPercentage` - battery percentage, updated automatically
- `hwVersion` - [HardwareVersion](#hardwareversion)
- `firmwareVersion` - firmware version the device runs
- `retiredAt` - set instead of deleting a device that has history, so its attempts keep their station
- `customRoundId` - round the station takes attempts for instead of its room's groups, null while it follows its room
- `customRoundSetAt`, `customRoundSetById` - when and by which [User](#user) the custom round was set
- `tutorialEndsAt` - while in the future, the station takes tutorial solves, which are never saved
- `tutorialStartedById` - [User](#user) that started the tutorial
- `roomId` - [Room](#room)
- `createdAt` - date of creation
- `updatedAt` - date of last update

### User

All user accounts are stored in this table, both FKMTime and WCA accounts added to the system.

- `id` - unique identifier
- `password` - hashed password, only available for FKMTime accounts
- `username` - username, only available for FKMTime accounts
- `roles` - array of [Role](#role)
- `fullName` - full name of the user
- `wcaUserId` - WCA user ID, only available for WCA accounts
- `wcaAccessToken` - WCA access token, only available for WCA accounts
- `tokenVersion` - bumped when the password changes, so sessions signed in before stop working
- `avatarUrl` - WCA avatar URL
- `createdAt` - date of creation
- `updatedAt` - date of last update

### StageLeadRoom

The rooms a stage leader takes attendance in. A stage leader with no rows covers all rooms.

- `userId` - [User](#user)
- `roomId` - [Room](#room)

### QuickAction

This table stores quick actions that can be used to simplify resolving incidents process by delegates.

- `id` - unique identifier
- `name` - action name
- `comment` - comment that will be added to the attempt
- `giveExtra` - boolean, if the action should give extra attempt
- `isShared` - boolean, if the action is shared between all users
- `userId` - [User](#user) that created the action
- `createdAt` - date of creation
- `updatedAt` - date of last update

### Person

This table stores data about competitors and staff members. Most data are inserted during import and sync.

- `id` - unique identifier
- `registrantId` - WCA registrant ID
- `wcaRegistrationId` - the WCA registration's database id, null for people created on site
- `name` - full name
- `wcaId` - WCA ID
- `countryIso2` - country ISO2 code
- `gender` - gender
- `canCompete` - boolean, if the person can compete
- `birthdate` - date of birth, null for all persons except newcomers
- `checkedInAt` - date of check-in
- `cardId` - assigned card ID

### StaffActivity

This table stores data about all staff/competing activities, pre-assigned and performed during the competition.

- `id` - unique identifier
- `personId` - [Person](#person)
- `deviceId` - [Device](#device) (can be null)
- `isAssigned` - boolean, if the activity is pre-assigned
- `status` - [StaffActivityStatus](#staffactivitystatus)
- `groupId` - WCIF group ID
- `role` - [StaffRole](#staffrole), role of the person in the group
- `comment` - comment
- `leftEarly` - boolean, left before the group ended (only with `PRESENT` or `LATE`)
- `noShow` - boolean, not coming for the rest of the day (only with `ABSENT`)
- `replacedById` - [Person](#person) who did the job instead (only with `REPLACED` or `ABSENT`)
- `createdAt` - date of creation
- `updatedAt` - date of last update

### Result

This table stores all results that are entered during the competition.

- `id` - unique identifier
- `personId` - [Person](#person)
- `eventId` - event ID, taken from `backend/src/events.ts`
- `roundId` - round ID in WCIF format
- `isDoubleChecked` - boolean, if the result was already double-checked
- `doubleCheckedById` - [User](#user) that double-checked the result
- `doubleCheckedAt` - date of double-checking
- `removedAt` - set when the result was removed under Regulation 9t; it is kept, but left out of every list
- `removedById` - [User](#user) that removed it
- `removedReason` - why it was removed
- `removedByRulingOfId` - the [Result](#result) whose DNF ruling removed this one; restoring that result brings this one back
- `createdAt` - date of creation
- `updatedAt` - date of last update

### Attempt

This table is the biggest table, it stores all attempts that are entered during the competition.

- `id` - unique identifier
- `sessionId` - unique identifier generated by FKMTime device that prevents from entering the same attempt twice
- `resultId` - [Result](#result)
- `attemptNumber` - number of the attempt
- `replacedBy` - number of the attempt that replaced this one (if extra attempt was granted)
- `comment` - comment for the attempt, added by the delegate
- `type` - [AttemptType](#attempttype)
- `status` - [AttemptStatus](#attemptstatus)
- `penalty` - penalty in seconds added to the time
- `value` - time in centiseconds
- `originalTime` - exact time taken from stackmat, in milliseconds
- `inspectionTime` - inspection time measured by the device
- `judgeId` - [Person](#person) that judged the attempt
- `scramblerId` - [Person](#person) that scrambled the attempt
- `scrambledAt` - date of scrambling
- `deviceId` - [Device](#device) that was used to enter the attempt (can be null if attempt was entered manually)
- `solvedAt` - date of finishing the solve
- `updatedById` - [User](#user) that last edited the attempt
- `extraGrantId` - [ExtraGrant](#extragrant) this attempt belongs to
- `statusBeforeGrant`, `statusInGrant`, `replacedByInGrant` - the attempt's state before and within an extra grant, so the grant can be undone
- `createdAt` - date of creation
- `updatedAt` - date of last update

### ExtraGrant

An extra granted for all attempts of a result so far.

- `id` - unique identifier
- `resultId` - [Result](#result)
- `useFreshSet` - boolean, if the extras use a fresh scramble set
- `createdById` - [User](#user) that granted it
- `createdAt` - date of creation
- `restoredAt` - date the grant was undone

### AttemptEditLog

Every change to an attempt, with the attempt's values before the change.

- `id` - unique identifier
- `attemptId` - [Attempt](#attempt)
- `editedAt` - date of the change
- `editedById` - [User](#user) that made the change
- `comment` - why the attempt was changed
- `value`, `penalty`, `status`, `type`, `attemptNumber`, `replacedBy`, `judgeId`, `scramblerId`, `deviceId`, `attemptComment` - the attempt's values

### NoteworthyIncident

Incidents marked as noteworthy, for example to report to the WCA.

- `id` - unique identifier
- `title` - title
- `description` - description
- `attemptId` - [Attempt](#attempt)
- `createdById` - [User](#user) that created it
- `createdAt` - date of creation
- `updatedAt` - date of last update

### ManualIncident

Incidents entered by hand, not tied to an attempt in the system.

- `id` - unique identifier
- `personId` - [Person](#person)
- `roundId` - round ID in WCIF format
- `description` - description
- `attempt` - attempt it is about
- `isNoteworthy` - boolean, if the incident is noteworthy
- `createdById` - [User](#user) that created it
- `createdAt` - date of creation
- `updatedAt` - date of last update

### Warning

Warnings given to competitors.

- `id` - unique identifier
- `description` - description
- `personId` - [Person](#person) that received the warning
- `createdById` - [User](#user) that gave it
- `createdAt` - date of creation
- `updatedAt` - date of last update

### DelegateGrant

Delegate access for one group: a delegate lets a user resolve the group's incidents while it runs. See [Delegate access for one group](../during-the-competition/delegate-access.md).

- `id` - unique identifier
- `userId` - [User](#user) who got the access
- `groupId` - WCIF group activity code, e.g. `333-r1-g2`
- `permissions` - array of [DelegateGrantPermission](#delegategrantpermission), what they can do besides resolving incidents
- `createdById` - [User](#user) that gave it
- `createdAt` - date of creation
- `activatedAt` - when the group started in its room, null while the access waits for the group
- `endedAt` - date the access ended, by itself or ended by a delegate
- `endedById` - [User](#user) that ended it early

### DelegateGrantAction

What a user did under delegate access, for delegates to look over.

- `id` - unique identifier
- `grantId` - [DelegateGrant](#delegategrant)
- `kind` - what kind of action it was, e.g. resolving an incident or giving an extra
- `resultId`, `attemptId` - the result and attempt it changed. Plain IDs, not relations, so the action stays after the attempt is deleted
- `personName` - the competitor's name
- `summary` - what changed, in words
- `createdAt` - date of creation

### LiveSync

Where each result stands in WCA integrated live results.

- `resultId` - [Result](#result)
- `status` - [LiveSyncStatus](#livesyncstatus)
- `sentHash` - hash of the attempts last sent, compared with what the WCA holds
- `sentAt` - date of sending
- `checks` - number of read-backs that didn't match yet
- `removedFromRound` - boolean, FKMTime removed the competitor from the round, so restoring the result has to add them back first
- `error` - last error
- `updatedAt` - date of last update

### LiveClear

A result deleted in FKMTime whose copy in WCA integrated live results still has to be cleared.

- `id` - unique identifier
- `roundId` - round ID in WCIF format
- `wcaRegistrationId` - WCA registration ID of the competitor
- `createdAt` - date of creation

### ScramblingDevice

This table stores data about scrambling devices (e. g. laptops) that are used during the competition.

- `id` - unique identifier
- `name` - device name
- `encryptedToken` - token used to authenticate the device
- `encryptedOneTimeCode` - one-time code used to pair the device
- `oneTimeCodeExpiresAt` - date the one-time code stops working
- `roomId` - [Room](#room)
- `createdAt` - date of creation
- `updatedAt` - date of last update

### ScrambleSet

- `id` - unique identifier
- `roundId` - round ID in WCIF format
- `set` - letter, e. g. "A"
- `createdAt` - date of creation
- `updatedAt` - date of last update

### Scramble

- `id` - unique identifier
- `scrambleSetId` - [ScrambleSet](#scrambleset)
- `num` - number of the scramble in the set
- `isExtra` - boolean, if the scramble is extra
- `encryptedScramble` - encrypted scramble
- `createdAt` - date of creation
- `updatedAt` - date of last update

## Enums

### AttemptType
- `STANDARD_ATTEMPT` - applied for all normal attempts
- `EXTRA_ATTEMPT` - applied for extra attempts

### AttemptStatus
- `SCRAMBLED` - the attempt was scrambled, but not solved yet
- `STANDARD` - applied for all normal attempts
- `UNRESOLVED` - applied for incidents that need to be resolved
- `RESOLVED` - applied for resolved incidents, without extra
- `EXTRA_GIVEN` - applied for resolved incidents, with extra
- `VOIDED` - an attempt waiting for an extra that can never come, because the competitor missed the cutoff

### Role
See [Accounts](./accounts.md#roles) for what each role can do.
- `ADMIN`
- `ORGANIZER`
- `DELEGATE`
- `STAGE_LEADER`
- `STAFF`

### DeviceType
- `STATION` - device that is used to enter results
- `ATTENDANCE_SCRAMBLER` - staff attendance device for scramblers
- `ATTENDANCE_RUNNER` - staff attendance device for runners

### HardwareVersion
- `V3`
- `V4`

### DelegateGrantPermission
What [delegate access](#delegategrant) allows besides resolving incidents.
- `GIVE_EXTRA` - give an extra
- `ADD_ATTEMPT` - add an attempt
- `REORDER_ATTEMPTS` - reorder attempts
- `EDIT_ATTEMPT` - edit an attempt that isn't an incident
- `DELETE_ATTEMPT` - delete an attempt
- `EXTRAS_FOR_SEVERAL` - give extras for several attempts
- `DNF_ALL` - DNF all attempts

### StaffRole
- `COMPETITOR` - competitor
- `JUDGE` - judge
- `RUNNER` - runner
- `SCRAMBLER` - scrambler
- `DELEGATE` - delegate
- `STAFF_OTHER` - other staff

### StaffActivityStatus
- `PRESENT` - was there
- `ABSENT` - wasn't there
- `LATE` - came late
- `REPLACED` - someone else did the job

### SendingResultsFrequency
- `AFTER_SOLVE` - selected by default, results are sent after each solve
- `EVERY_5_MINUTES` - results are sent every 5 minutes
- `NEVER` - results are not sent

### LiveSyncStatus
- `DIRTY` - changed since it was last sent
- `SENT` - the WCA accepted it, not read back yet
- `CONFIRMED` - read back from the WCA and matches
- `NOT_IN_ROUND` - the WCA doesn't list the person in the round
- `NOT_SENDABLE` - can't be sent, e.g. the person has no WCA registration
- `REJECTED` - the WCA refused it, or it breaks the round's rules
