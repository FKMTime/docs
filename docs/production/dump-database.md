---
sidebar_position: 3
---

# Dump database

It is a good practice to dump the database after competition so it can be used for future analysis or to restore the database if any data is needed after turning of the server.

## Dumping the database

1. Enter the database container:

```bash
docker exec -it fkmtime-database bash;
```

2. Run the following command in the container:

```bash
pg_dump -d fkm_time > dump.sql;
```

This command will dump the database to `dump.sql` file in the Docker container.

3. Copy the dump file to the host machine:

```bash
docker cp fkmtime-database:/dump.sql dump.sql;
```

You can read about importing the database into development environment in the [Importing database dump](/development/importing-database-dump) section.