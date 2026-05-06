---
sidebar_position: 4
---

# Firmware

## Install the Rust ESP toolchain

The firmware is built on top of [`esp-hal`](https://github.com/esp-rs/esp-hal) (Rust). First, set up the Rust ESP toolchain by following the official [installation guide](https://docs.espressif.com/projects/rust/book/getting-started/toolchain.html).

Then install [`espflash`](https://docs.espressif.com/projects/rust/book/getting-started/tooling/espflash.html), which is used as the Cargo runner to flash and monitor the device.

## Building & Running

Once the toolchain is installed, you can build and flash the firmware with a single command.

```bash
cd firmware #ensure you are in the firmware directory (in firmware repo)
cargo run -r
```

`cargo run -r` builds the latest supported firmware in release mode and flashes it to the connected device using `espflash` (configured as the Cargo runner).

By default after build, binaries are also copied into `/tmp/fkm-build` folder. Development binaries are marked with their build time (epoch seconds).

## Flashing

To flash a built firmware binary onto a connected device manually, use [`espflash`](https://docs.espressif.com/projects/rust/book/getting-started/tooling/espflash.html). For day-to-day development simply running `cargo run -r` from the `firmware` directory will build and flash the device in one step.

For over-the-air updates you can use the built-in OTA (over the air update) in the `micro-connector`.

By default `micro-connector` is watching `/tmp/fkm-build` dir for firmware changes.

To flash development firmware you need to add `DEV` environment variable. If you are running `micro-connector` using cargo (not docker) you can change that in `.env` file in project dir.

### Common issues

1. If you aren't using `DEV` mode your firmware won't be updated to the development version of firmware.
