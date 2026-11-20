---
sidebar_position: 2
---

# FKMTime Instance Manager (FIM)

[FIM](https://github.com/FKMTime/fim) is a small web app for managing
FKMTime instances. It runs `docker compose` for you, so you do not have
to clone the production repo and edit env files by hand for every
competition. It is designed to run on **OpenWRT** routers (so you can
have a dedicated competition box that "just works"), but it also runs on
any Linux host with Docker, on macOS, and on Windows with WSL.

The web UI lives on `http://0.0.0.0:8181`. On OpenWRT you sign in with your
LuCI username and password. Everywhere else the default login is
`root` / `root`; change it under **Account** after the first sign-in.

## Running natively

Clone the repo and run the manager directly with Python:

```bash
git clone https://github.com/FKMTime/fim
cd fim
python3 manager.py
```

Then open `http://localhost:8181` in your browser.

## Running in Docker

The manager needs the host Docker socket so it can spin up FKMTime
instances on the host.

```bash
export FIM_DATA_DIR=/opt/fim
mkdir -p $FIM_DATA_DIR
docker compose up -d
```

Override `FIM_DATA_DIR` in a `.env` file beside `docker-compose.yml` if
you want a different path.

:::warning Same-path bind mount
FKMTime instance templates use **relative** bind mounts (e.g. `./db`,
`./logs`). Docker Compose resolves these to absolute paths and passes
them to the **host** Docker daemon, so the data directory must be
mounted at the **same absolute path inside and outside** the container.
That is what `FIM_DATA_DIR` does.
:::

For a manual `docker run`:

```bash
docker run -d \
  -p 8181:8181 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /opt/fim:/opt/fim \
  -e FIM_DATA_DIR=/opt/fim \
  fim
```

## Creating an instance

1. In the **Instances** card, click **New instance**.
2. Pick a **Template** — `prod` for a real competition, `dev` for a demo
   instance that signs in against the dummy WCA services — enter a **Name**
   and click **Create**.
3. Open the **Env** tab and fill in the environment variables (see
   [Setup for production](./setup-for-production#environment-variables)),
   then click **Save**.
4. Back in the **Control** tab, click **Start** next to the instance.

The instance's logs are available in the panel, see
[Accessing logs](./accessing-logs).

## Wi-Fi on OpenWRT

On OpenWRT, the **WiFi** tab sets the **Hotspot** that FKMTime devices
connect to and the **Uplink** network that gives the router internet access.
You can also set a **Backup uplink**, such as a phone hotspot: when the
uplink has had no internet for a minute, FIM switches to the backup, and
switches back once the uplink works again.

## BLE and mDNS on Docker Desktop (macOS / Windows)

On macOS and Windows, Docker Desktop runs containers inside a Linux VM,
so containers do not have direct access to the host's Bluetooth or mDNS
stack. That breaks BLE pairing of FKMTime stations and `fkmtime.local`
discovery out of the box. (On Linux this just works because Docker is
native.)

The fix is the same in both cases: run
[`docker-adapter`](https://github.com/filipton/docker-adapter) on the
host. It's a small standalone binary that forwards the host's BLE and
mDNS into the FKMTime containers, so device pairing and `*.local`
resolution work just like on Linux. The same adapter is used on both
macOS and Windows; only the binary differs.

`micro-connector` probes the docker-adapter host port at startup and
automatically uses it if it's available, so this works for **any**
FKMTime instance, regardless of whether it was started by FIM, by
`docker compose up`, or by hand.

### With FIM (easiest)

FIM's only job here is to download `docker-adapter` for you and keep it
running, so you don't have to start it manually after every reboot.

:::caution
The auto-adapter feature is only available when FIM is running
**natively**. If FIM itself is running inside Docker, it cannot spawn or
supervise host binaries, so the **Adapter** tab will not work. On macOS
and Windows you should always run FIM natively; use the manual install
below if you really need FIM in Docker for some reason.
:::

1. Run FIM **natively** (not in Docker), as shown
   [above](#running-natively).
2. Open the **Adapter** tab in FIM's web UI.
3. Click the install/enable button. FIM grabs the right binary from the
   [`docker-adapter` releases](https://github.com/filipton/docker-adapter/releases/latest)
   and runs it in the background.

### Without FIM (manual)

`docker-adapter` is a standalone binary, not a Docker container, so you
don't need FIM at all to use it.

1. Download the matching build for your platform (macOS arm64 / x64,
   Windows x64) from the
   [`docker-adapter` releases page](https://github.com/filipton/docker-adapter/releases/latest).
2. Run the binary.
3. Keep it running while your FKMTime instance is up. Start your
   instance the usual way (e.g. `docker compose up`); micro-connector
   will detect the adapter on its own.
