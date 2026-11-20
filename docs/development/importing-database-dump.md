---
sidebar_position: 5
---

# Importing database dump

You can import the database dump into the [development environment](./dev-environment.md#docker)
in the following way. Run the commands in the root directory of the FKMTime
repository, with the dev stack running.

1. Clear the development database:

```bash
docker compose exec database psql -d fkm_time -c 'DROP SCHEMA public CASCADE; CREATE SCHEMA public;'
```

2. Import the dump:

```bash
docker compose exec -T database psql -d fkm_time < dump.sql
```

3. Restart the backend, so it brings the schema up to date:

```bash
docker compose restart backend
```

That's it! You have successfully imported the database dump into the development environment.
