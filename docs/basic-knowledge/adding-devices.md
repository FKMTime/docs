---
sidebar_position: 4
---

# Adding devices to database

FKMTime devices connect to the backend over Wi-Fi, through micro-connector. First enter your Wi-Fi network details in the panel. Micro-connector can then send them to the devices over Bluetooth. You can read more about running micro-connector in the [production](/production/setup-for-production) section.

## Enter your Wi-Fi data

Go to **Setup** → **Competition** (or click **Device settings** on the **Devices** page) and fill in the **Network** card:

- **WiFi SSID** and **WiFi password** - the network the devices should join
- **Auto server discovery** - devices find the server with mDNS. Turn it off only if mDNS doesn't work in your network, and enter the **micro-connector ws URL** instead

Click **Save** at the bottom of the page.

## Adding devices

### If your machine supports bluetooth

Go to the **Devices** page and click **Auto setup**. For the next 5 minutes, micro-connector writes the Wi-Fi data to new devices over Bluetooth. After that, devices will be able to communicate with backend by Wi-Fi through micro-connector.

### If your machine doesn't support bluetooth

Turn on the device and connect to the hotspot it creates. Its name is `FKM-XXXX` (the same name is shown on the device) and it has no password. A setup page opens on its own; if it doesn't, go to `192.168.4.1`. Enter the **Network name (SSID)** and **Password**, set **Auto server discovery (mDNS)** (or enter the **WebSocket URL**) the same way as in the panel, and click **Connect to Network**.

### After entering Wi-Fi data

To connect a new device, press the submit button on it. The **Devices** page then shows **New device wants to connect** with its ESP ID. Click **Add**, fill in the **Create device** form (name, and room, type and hardware version when there is more than one to choose from) and click **Add**. A device that was added before shows **wants to reconnect** instead; click **Reconnect**.

You can also add a device by hand with **Add device**, if you know its ESP ID.

## Managing devices

Each device shows its battery, Wi-Fi signal, firmware version and how many solves it recorded. Click the number of solves to see every solve the device recorded. If a station hits an error, an icon next to it shows the error and how to fix it.

Device actions:

- **Edit device** - change name, room or type
- **Start tutorial** (delegates, stations only) - the station takes practice solves that are never saved, so newcomers can try it. It ends by itself 15 minutes after the station was last used, or with **End tutorial**
- **Run a different round…** (delegates, stations only) - the station takes attempts for another round than its room's groups, until you click **Back to the room's round**
- **View logs** (admins) - live logs of the device
- **Delete device** - a device that already recorded solves is retired instead, so its solves keep their station. Retired devices are listed under **Retired devices** and can be restored
