---
sidebar_position: 5
---

# Tests

## E2E devices tests

You can test the communication of FKM devices with `micro-connector` using builtin E2E tests.

E2E tests are just simulating many different solve scenarios on real devices, so you can easily detect logic bugs or whole firmware crashes.

### Running tests

E2E test server is mocking normal backend, so you need to disable it in order to run it.

To run E2E tests go to `micro-connector` project dir and run:

```bash
cargo run --bin e2e
```

This command will test all scenarios in a loop (in random order).

#### Docker

There is also a way to start E2E test server using docker. Just build the image;

```bash
docker compose build
```

And then run it:

```bash
docker compose up
```
