---
sidebar_position: 1
---

# Setup environment

You can run FKMTime in development mode in 2 ways:
- Using Docker
- Running backend and frontend separately

Clone FKMTime repository and navigate into it

```bash
git clone https://github.com/FKMTime/FKMTime
cd FKMTime
```

## Docker
Run the following command in the root directory of the project

```bash
docker compose up
```

Frontend will be accessible at localhost:5173, backend at localhost:5000, database at localhost:5432 and api-tester at localhost:5001

Read about setuping WCA and WCA Live server in [WCA Server](./wca-server.md) section.

## Running backend and frontend separately

#### Requirements
- NodeJS (version 19.0.0 or later)
- PostgreSQL

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

- Create .env file and enter database URL, JWT secret and WCA and WCA Live URL
```
PORT=5000
DATABASE_URL=postgres://postgres@localhost:5432/fkm_time
SECRET=jwt_secret
WCA_LIVE_API_ORIGIN=http://localhost:4000/api
WCA_ORIGIN=http://localhost:3000
WCA_CLIENT_ID=example-application-id
WCA_CLIENT_SECRET=example-secret
```

If you don't have WCA server running you can seed the DB with sample data by running

```bash
npm run prisma:seed-test
```

This will also create a user with username `admin` and password `admin`, you can use these credentials to login to the admin panel instead of WCA account.

- Run backend in development mode
```
npm run start:dev
```

The server will be accessible at localhost:5000

#### Frontend

- Navigate into frontend directory
```bash
cd frontend
```

- Install dependencies
```
npm install
```

- Run development server
```
npm run dev
```

Admin panel will be accessible at localhost:5173



