---
sidebar_position: 0
slug: /debugging
---

# Error Codes

The FKMTime device firmware logs error codes when something goes wrong. Errors vary in severity — some cause a reboot or stop a single task, others are silently recorded and the device continues normally.

## Viewing the error log

Error codes are stored in the device's built-in error log. To access it:

1. Hold the **Submit** button for **10 seconds**.
2. Select **Error Log** from the menu.

Each entry shows the error code and the timestamp when it occurred.

- **v3**: only the date and error code are displayed.
- **v4**: press **Submit** on any error entry to see more details and a QR code that links directly to the documentation page for that error.

You can look up any code below to find a description and steps to resolve it.

Each error code also has a dedicated documentation page at:
```
https://docs.fkmtime.com/debugging/e<code>
```

---

## RFID (E1–E9)

| Code | Name | Description |
|------|------|-------------|
| [E1](e1) | `RFID_INIT_FAILED` | RFID reader failed to initialize |
| [E2](e2) | `RFID_SPI_CREATE_FAILED` *(v3)* | SPI device registration for RFID failed |
| [E3](e3) | `RFID_SPI_BUS_INIT_FAILED` *(v3)* | SPI bus initialization failed |
| [E4](e4) | `RFID_DMA_TX_INIT_FAILED` *(v3)* | DMA TX channel for RFID SPI failed |
| [E5](e5) | `RFID_DMA_RX_INIT_FAILED` *(v3)* | DMA RX channel for RFID SPI failed |
| [E6](e6) | `RFID_SOLVE_GROUP_MISSING` | Device has no solve group assigned |

## Battery (E10–E19)

| Code | Name | Description |
|------|------|-------------|
| [E10](e10) | `BATTERY_INIT_FAILED` *(v4)* | Battery monitoring subsystem failed to initialize |

## LCD / Display (E20–E29)

| Code | Name | Description |
|------|------|-------------|
| [E20](e20) | `LCD_INIT_FAILED` *(v4)* | LCD display driver failed to initialize |
| [E21](e21) | `LCD_FRAMEBUFFER_ALLOC_FAILED` *(v4)* | Could not allocate LCD framebuffer in RAM |

## Stackmat (E30–E39)

| Code | Name | Description |
|------|------|-------------|
| [E30](e30) | `STACKMAT_UART_INIT_FAILED` | UART for Stackmat timer failed to initialize |

## Firmware / OTA (E40–E49)

| Code | Name | Description |
|------|------|-------------|
| [E40](e40) | `WRONG_PARTITION_TABLE` | Flash partition table does not match firmware expectations |
| [E41](e41) | `OTA_MARK_VALID_FAILED` | Failed to mark new firmware as valid after OTA update |
| [E42](e42) | `OTA_VERIFY_FAILED` | Downloaded OTA image failed integrity verification |
| [E43](e43) | `WS_CONNECTION_LOST_DURING_OTA` | WebSocket dropped mid-OTA update |

## BLE (E50–E59)

| Code | Name | Description |
|------|------|-------------|
| [E50](e50) | `BLE_INIT_FAILED` | BLE stack failed to initialize |
| [E51](e51) | `BLE_MAC_READ_FAILED` | Could not read the device BLE MAC address |
| [E52](e52) | `BLE_BOND_ADD_FAILED` | Failed to store BLE bond keys in NVS |
| [E53](e53) | `BLE_SCAN_START_FAILED` | BLE scan for FKMTime Displays could not start |
| [E54](e54) | `BLE_BONDABLE_FAILED` | Could not set BLE stack into bondable mode |
| [E55](e55) | `BLE_REQUEST_SECURITY_FAILED` | BLE security request failed |
| [E56](e56) | `BLE_PAIRING_FAILED` | BLE pairing with FKMTime Display unsuccessful |
| [E57](e57) | `BLE_GATT_CLIENT_FAILED` | GATT client creation failed |
| [E58](e58) | `BLE_SERVICE_NOT_FOUND` | Expected BLE service not found on FKMTime Display |
| [E59](e59) | `BLE_CHARACTERISTIC_NOT_FOUND` | Expected BLE characteristic not found |

## Wi-Fi / mDNS / WebSocket (E60–E69)

| Code | Name | Description |
|------|------|-------------|
| [E60](e60) | `WIFI_MANAGER_FAILED` | Wi-Fi manager failed to start |
| [E61](e61) | `MDNS_WS_URL_PARSE_FAILED` | WebSocket URL from mDNS discovery could not be parsed |
| [E62](e62) | `WS_DNS_RESOLVE_EMPTY` | DNS resolution for the server hostname returned no results |
| [E63](e63) | `WS_HTTP_UPGRADE_READ_FAILED` | Reading the WebSocket HTTP upgrade response failed |
| [E64](e64) | `WS_PACKET_PARSE_FAILED` | Received WebSocket packet could not be decoded |
| [E65](e65) | `WS_PACKET_SERIALIZE_FAILED` | Outgoing WebSocket packet could not be encoded |
| [E66](e66) | `WS_TAGGED_SUBSCRIBER_FAILED` | Failed to register a WebSocket message subscriber |

## NVS Persistence (E70–E79)

| Code | Name | Description |
|------|------|-------------|
| [E70](e70) | `NVS_SAVED_STATE_WRITE_FAILED` | Writing device state to NVS failed |
| [E71](e71) | `NVS_BONDING_KEY_WRITE_FAILED` | Writing BLE bond keys to NVS failed |
| [E72](e72) | `NVS_BUZZER_VOLUME_WRITE_FAILED` *(v4)* | Writing buzzer volume setting to NVS failed |
| [E73](e73) | `ERROR_LOG_PARSE_FAILED` | Could not parse the crash log stored in NVS |
| [E74](e74) | `NVS_SAVED_STATE_DELETE_FAILED` | Deleting saved state from NVS failed |

## Tasks / Runtime (E80–E89)

| Code | Name | Description |
|------|------|-------------|
| [E80](e80) | `TASK_SPAWN_FAILED` | A required FreeRTOS task could not be created |

## Crash Recovery (E90–E99)

| Code | Name | Description |
|------|------|-------------|
| [E90](e90) | `DOUBLE_PANIC_RECOVERY` *(release)* | Device panicked twice and entered safe recovery mode |
| [E91](e91) | `BACKTRACE_READ_FAILED` | Crash backtrace could not be read from NVS |
