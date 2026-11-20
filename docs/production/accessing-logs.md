---
sidebar_position: 3
---

# Accessing logs

You can access logs in two ways:
- In the panel (admins only)
- With docker command

## Server logs in the panel

Admins can read the server logs in the panel: click **Server logs** on the
Competition page, or go to `/logs`. Recent history shows first. Other roles
can't open this page.

:::note
The backend's own log is written only when `BACKEND_LOGS_DIR` is set for the
backend, as in the FIM templates. Without it, the page says the backend log
isn't available.
:::

## Docker logs

You can also access logs with docker logs command. Just run this command in
the directory with the `docker-compose.yml` file:

```bash
docker compose logs -f
```
