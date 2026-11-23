---
sidebar_position: 3
---

# Accounts

You can sign in to FKMTime with a WCA account or with an FKMTime account (username and password).

Delegates and organizers of the competition should sign in with their WCA accounts. FKMTime gives them their role automatically: a WCA Delegate of the competition becomes **Delegate**, any other person who manages the competition on the WCA website becomes **Organizer**. Roles are checked again on every WCA sign-in.

But sometimes, you want for example Competition Volunteer to check-in competitors. You have to create an FKMTime account for them OR add their WCA account to the system.

## Roles

| Role | What they can do |
|------|------------------|
| **Staff** | View the panel, check in competitors and assign cards |
| **Stage leader** | Staff, plus attendance and marking competitors as not coming, in the rooms they're given (see [Stage leaders and rooms](#stage-leaders-and-rooms)) |
| **Organizer** | Stage leader, plus devices, setup (competition settings, users, unofficial events), adding persons and running groups |
| **Delegate** | Organizer, plus incidents, scrambles, all results tools, tutorial mode and running a different round on a station |
| **Admin** | Everything, including server logs, device logs and uploading firmware |

You can't give anyone a role higher than your own: an organizer can't create delegates or admins.

A delegate can also give a user who isn't a delegate or admin [delegate access for one group](../during-the-competition/delegate-access.md). While it lasts, that user gets **Incidents** and can resolve the incidents of that group, with only the actions the delegate allowed. Their role doesn't change, and the access ends by itself when the group ends.

## Creating an account

Users can be added after the competition is imported. Go to **Setup** → **Users** and click **Create user**. Choose between the **FKMTime Account** and **WCA Login** tabs.

![Users tab](../assets/users.png)

### FKMTime Account

Fill in **Username**, **Full name**, **Password** and **Roles** and click **Create**. For a stage leader, also choose their rooms (see below). User will be able to sign in with the username and password you provided.

![Create user dialog, FKMTime Account tab](../assets/create-user-fkmtime.png)

### WCA Login

Search for a person, select roles (and rooms, for a stage leader) and click **Create**. User will be able to sign in with their WCA account and will have the roles you selected.

![Create user dialog, WCA Login tab](../assets/create-user-wca.png)

## Stage leaders and rooms

A stage leader takes [attendance](../during-the-competition/attendance.md) in the rooms you give them, so a stage leader of one room can't change another room's attendance by picking the wrong group.

When you give someone the **Stage leader** role, choose under **Takes attendance in** either **All rooms** or the rooms they cover. You can't create the account until something is ticked. If the competition has only one room, the field doesn't show and they cover all rooms. Organizers, delegates and admins always cover all rooms, so the field doesn't show for them either.

The users list shows the rooms after the role, e.g. **Stage leader · Side Hall**. To move a stage leader to another room, for example on the next day, edit the user and change their rooms.

A stage leader with some rooms:

- sees only those rooms' groups on the **Attendance** page, and "Attendance" only on their rooms on the home page, the schedule and a person's page,
- can mark someone as not coming for the rest of the day if one of that person's groups that day is in their rooms; it applies to the whole day, other rooms included,
- still sees the attendance statistics and the most missed assignments for the whole competition.

A room's groups are the ones the schedule puts in it, plus any group the room has run, so a group moved to another room on the day belongs to both.

Stage leaders added before this existed cover all rooms until you change them.

## Managing accounts

Each user in the list has actions to **Edit user** (roles, a stage leader's rooms, and username and full name of FKMTime accounts), **Change password** (FKMTime accounts only) and **Delete user**.

When a password changes, every session signed in with the old password ends. Users who are deleted or whose roles change are disconnected within a few seconds and see the panel with their new access.

Users with an FKMTime account can change their own password on the **Settings** page.

## Access to competition

If someone who signs in with a WCA account doesn't manage the competition and wasn't added on the Users page, they can't sign in ("You are not allowed to manage this competition"). Add them as delegate/organizer on the WCA website (FKMTime checks it with the WCA on every sign-in), or add their WCA account as described above.
