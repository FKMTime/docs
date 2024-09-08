---
sidebar_position: 5
---

# Importing database dump

You can import the database dump into the development environment in the following way:

1. Copy the dump file to the database container:

```bash
docker cp dump.sql fkmtime-dev-database:/dump.sql;
```

2. Enter the database container:

```bash
docker exec -it fkmtime-dev-database bash;
```

3. Enter the psql shell:

```bash
psql -d fkm_time;
```

4. Run the following command in the container:

```sql
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
```

5. Exit psql shell and run the following command in the Docker container:

```bash
psql -d fkm_time < dump.sql;
```

That's it! You have successfully imported the database dump into the development environment. 
