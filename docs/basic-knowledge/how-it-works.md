---
sidebar_position: 1
---

# How FKMTime works?

Basically, there are:
- Backend: Nest.js
- Frontend: React
- Database: PostgreSQL
- Micro-connector: Rust
- FKM Devices (PlatformIO)

Communication between devices and backend looks like this:

![Infrastructure](../assets/infrastructure.png)

You have to enter your WiFi network details in devices settings on frontend. Micro-connector will connect via bluetooth with all devices and send them WiFi details. After that, devices will be able to communicate with backend by WiFi through micro-connector. You can read more about this in the Production section.

#TODO: add link do production