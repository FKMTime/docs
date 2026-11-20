---
sidebar_position: 1
---

# E2E devices tests

You can test FKMTime devices against a fake FKMTime server that comes with
`micro-connector`. It is used by the firmware's device simulations, and you can
use it with real devices too, so you can easily detect logic bugs or whole
firmware crashes without running the backend.

The fake server always behaves like FKMTime: attempts are tracked by session,
delegate calls become incidents, and resolved incidents, extra attempts,
cutoffs and time limits follow the same flows as on the real server.

### Running tests

The fake server replaces the normal backend, so stop the backend (and any
other micro-connector) before running it.

The fake server reads `tests.json` from the current directory. This file
defines `groups`, `cards` and optional `rounds` (attempt counts, cutoffs and
time limits in centiseconds). The one in the repository has sample cards and
groups.

To start it, go to the `micro-connector` project dir and run:

```bash
cargo run --bin e2e
```

Then run the micro-connector itself (`cargo run`) with the same `SOCKET_PATH`,
so devices connect to the fake server.

#### Docker

There is also a way to start the fake server and micro-connector together
using docker. Just build the images:

```bash
docker compose build
```

And then run them:

```bash
docker compose up
```
