---
sidebar_position: 1
---

# Setup for production

The system is designed to be configured from scratch for each competition. Everything should be run on a computer located at the competition venue.

We use Docker for production. Do the following steps to run the server:

:::tip Easier option: FIM
If you don't want to manage `docker compose` and `.env` files by hand,
take a look at the [FKMTime Instance Manager](./instance-manager) (FIM).
It wraps everything below into a small web UI and is the recommended
way to run FKMTime on a dedicated competition box.
:::

## Clone the production repository (and navigate into it)

```bash
git clone https://github.com/FKMTime/production
cd production
```

## Environment variables

Copy the `.env.example` file to `.env` and fill in the required fields.

```bash
cp .env.example .env
```

| Variable | What it is |
|----------|------------|
| `TOKEN` | Token for our proxy server |
| `SECRET` | Random secret, at least 32 characters. It signs sign-in sessions and encrypts the WCA tokens stored in the database, so keep it the same for the whole competition |
| `WCA_CLIENT_ID`, `WCA_CLIENT_SECRET` | WCA OAuth application credentials |
| `WCA_ORIGIN`, `WCA_LIVE_API_ORIGIN`, `CUBING_CONTESTS_API_ORIGIN` | Addresses of the WCA website, WCA Live and Cubing Contests; keep the defaults |
| `BACKEND_ORIGIN`, `REDIRECT_SSL` | Keep the defaults |

For now, contact us and we will send you the proxy token and WCA OAuth
credentials. Server will be running locally, but will be accessible from the
internet through our proxy server.

Generate `SECRET` yourself, for example with:

```bash
openssl rand -hex 32
```

:::warning
The backend refuses to start without a `SECRET` of at least 32 characters.
:::

We are using [fkm-proxy](https://github.com/FKMTime/fkm-proxy) for proxying requests to the server. You can find more information about it in the repository.

## Start the server

Run the following command to start the server:

```bash
docker compose up
```

This will start backend, micro-connector, database and frontend.
