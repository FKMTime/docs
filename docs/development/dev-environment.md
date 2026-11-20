---
sidebar_position: 1
---

# Setup environment

You can run FKMTime in development mode in 2 ways:
- Using Docker (recommended)
- Running backend and frontend separately

Clone FKMTime repository and navigate into it

```bash
git clone https://github.com/FKMTime/FKMTime
cd FKMTime
```

## Docker

The dev stack in `docker-compose.yml` runs the backend, frontend, PostgreSQL,
[dummy WCA and dummy WCA Live](./wca-server.md) and the
[micro-connector](./micro-connector.md). Run the following commands in the
root directory of the project:

```bash
docker compose pull dummy_wca dummy_wca_live micro_connector
docker compose up -d --build
```

Then seed the database with a sample competition:

```bash
docker compose exec backend npx ts-node prisma/seed/seed-test.ts
```

The seed imports the competition that the dummy WCA generates (invented
people, a two-day schedule starting today), so it needs the dummy WCA running.
It also creates an account with username `admin` and password `admin`, which
you can use to sign in instead of a WCA account.

| What | Where |
|------|-------|
| Panel | http://localhost:5173 |
| Backend | http://localhost:5000 (`/health`) |
| Station tester | http://localhost:5173/station-tester |
| Database | localhost:5433 (user `root`, password `password`, database `fkm_time`) |
| Dummy WCA / WCA Live | http://localhost:3005 / http://localhost:4000 |

Backend and frontend source code is mounted into the containers, so changes
reload on their own. Rebuild (`docker compose up -d --build`) after changing
dependencies.

:::tip
If you are not working on anything that needs a real device, you can skip
the micro-connector: put `FKMTIME_MICRO_CONNECTOR=0` in `.env` in the project
root and leave `micro_connector` out of the `pull`. The station tester covers
station messages without one.
:::

### Bluetooth on macOS

The micro-connector uses Linux D-Bus for Bluetooth, which containers on macOS
cannot reach. Run [docker-adapter](https://github.com/filipton/docker-adapter)
natively instead:

```bash
./scripts/docker-adapter.sh
```

The script downloads the adapter on first run. Keep it running, and allow
Bluetooth for your terminal in **System Settings → Privacy & Security →
Bluetooth**. Start the adapter **before** `docker compose up`: the
micro-connector looks for it only at startup. If the stack is already running,
restart it with `docker compose restart micro_connector`.

:::warning
Keep the backend in Docker when you work with devices. The micro-connector
talks to the backend over a unix socket in a Docker volume, and a unix socket
can't cross into the Docker VM on macOS.
:::

### Several stacks on one machine

Each clone (or git worktree) is its own Docker Compose project with its own
database. To run a second one next to the first, run `./scripts/dev-ports.sh`
before `docker compose up`. It picks free ports, writes them to `.env` and
prints the URLs; `./scripts/dev-ports.sh --clear` goes back to the defaults.
Only one stack per machine can run the micro-connector, so `dev-ports.sh`
turns it off in the stack it sets up.

`./scripts/dev-teardown.sh` removes the stack of the current directory for
good: containers, volumes (its database too), images and the ports in `.env`.

## Running backend and frontend separately

#### Requirements
- Node.js (current LTS)
- PostgreSQL
- [Dummy WCA and dummy WCA Live](./wca-server.md) (or real WCA servers)

#### Setup database

- Install PostgreSQL
- Create a database
```sql
CREATE DATABASE fkm_time;
```

#### Backend

- Navigate into backend directory
```bash
cd backend
```

- Install dependencies
```bash
npm install
```

- Create `.env` file and enter database URL, secret (at least 32 characters),
  and WCA and WCA Live URLs
```
DATABASE_URL=postgres://postgres@localhost:5432/fkm_time
SECRET=dev-only-secret-not-for-production-change-me
WCA_LIVE_API_ORIGIN=http://localhost:4000/api
WCA_ORIGIN=http://localhost:3005
WCA_CLIENT_ID=example-application-id
WCA_CLIENT_SECRET=example-secret
```

- Create the database tables
```bash
npx prisma db push
```

- Seed the database with sample data (needs the dummy WCA running at
  `WCA_ORIGIN`)
```bash
npx ts-node prisma/seed/seed-test.ts
```

This will also create a user with username `admin` and password `admin`, you can use these credentials to login to the admin panel instead of WCA account.

- Run backend in development mode
```bash
npm run start:dev
```

The server will be accessible at localhost:5000

#### Frontend

- Navigate into frontend directory
```bash
cd frontend
```

- Install dependencies
```bash
npm install
```

- Run development server
```bash
npm run dev
```

Admin panel will be accessible at localhost:5173. Set `VITE_BACKEND_ORIGIN`
and `VITE_WCA_ORIGIN` if your backend or WCA server runs somewhere other than
`http://localhost:5000` and the WCA staging server.

:::note
Always use Vite's dev server (`npm run dev`), not `vite preview`: a
production build ignores `VITE_BACKEND_ORIGIN` and `VITE_WCA_ORIGIN`.
:::
