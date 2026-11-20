---
sidebar_position: 4
---

# Dump database

It is a good practice to dump the database after competition so it can be used for future analysis or to restore the database if any data is needed after turning off the server.

## Dumping the database

Run the following command in the directory with the instance's
`docker-compose.yml` file:

```bash
docker compose exec -T database pg_dump -d fkm_time > dump.sql
```

This command will dump the database to the `dump.sql` file on the host machine.

You can read about importing the database into development environment in the [Importing database dump](/development/importing-database-dump) section.
