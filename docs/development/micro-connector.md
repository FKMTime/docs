---
sidebar_position: 3
---

# Setup micro-connector

If you want to use real devices, you need the micro-connector. It connects
FKMTime devices to the backend: it talks to devices over Wi-Fi (and Bluetooth,
to send them Wi-Fi details) and to the backend over a unix socket.

## Using the dev stack

The [dev stack](./dev-environment.md#docker) in the FKMTime repository already
runs the micro-connector (the `micro_connector` service, using the published
image), so you don't need to set it up separately unless you are working on
the micro-connector itself. On macOS, start the
[Bluetooth adapter](./dev-environment.md#bluetooth-on-macos) first.

## Running micro-connector from source

Clone micro-connector repo and navigate into it

```bash
git clone https://github.com/FKMTime/micro-connector
cd micro-connector
```

#### Requirements
- Rust (1.85 or later, the crate uses the 2024 edition)
- Cargo

Copy `.env.example` to `.env` and adjust it. `SOCKET_PATH` must point to the
backend's unix socket, and `FIRMWARE_DIR` is the folder watched for
[development firmware](./firmware.md#flashing). `NO_BT=1` turns off Bluetooth
and `NO_MDNS=1` turns off mDNS.

```bash
cp .env.example .env
```

Then run

```bash
cargo run
```

To see logs for the micro-connector only, use:

```bash
RUST_LOG=none,backend=trace cargo run
```

:::note
Stop the `micro_connector` service of the dev stack first
(`docker compose stop micro_connector`): only one micro-connector per machine
can run at a time.
:::
