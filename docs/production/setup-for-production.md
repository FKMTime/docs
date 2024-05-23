---
sidebar_position: 1
---

# Setup for production

The system is designed to be configured from scratch for each competition. Everything should be run on a computer located at the competition venue.

We use Docker for production. Do the following steps to run the server:

## Clone the production repository (and navigate into it)

```bash
git clone https://github.com/FKMTime/production
cd production
```

## Environment variables

Rename the .env.example file to .env and fill in the required fields.

```bash
mv .env.example .env
```

For now, contact us and we will send you hash, token, proxy and WCA oauth credentials. Server will be running locally, but will be accessible from the internet through our proxy server.

We are using [fkm-proxy](https://github.com/FKMTime/fkm-proxy) for proxying requests to the server. You can find more information about it in the repository.

## Logs user

Generate a password hash for the logs user using the following command:
```bash
echo -n 'secret-password' | shasum -a 256
```

Rename the users-example.yml file to users.yml and paste your hash into "password" field

```bash
mv dozzle/users-example.yml dozzle/users.yml
```

And finally, run the following command to start the server:

```bash
docker compose up
```

This will start backend, micro-connector, database and frontend. 
