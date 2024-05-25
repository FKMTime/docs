---
sidebar_position: 4
---

# Firmware

## Install PlatformIO CLI

First of all you need to follow the [installation guide](https://docs.platformio.org/en/latest/core/installation/index.html)

## Building

You can easily build the firmware using platformio CLI commands.

```bash
cd firmware #ensure you are in the firmware directory (in firmware repo)
pio run
```

By default after build binaries are copied into `/tmp/fkm-build` folder. Development binaries are marked with their build time (epoch seconds).

## Flashing

To easily flash firmware on the device, you can use the built-in OTA (over the air update) in the `micro-connector`.

By default `micro-connector` is watching `/tmp/fkm-build` dir for firmware changes.

To flash development firmware you need to add `DEV` environment variable. If you are running `micro-connector` using cargo (not docker) you can change that in `.env` file in project dir.

### Common issues

1. If you aren't using `DEV` mode your firmware won't be updated to the development version of firmware.
