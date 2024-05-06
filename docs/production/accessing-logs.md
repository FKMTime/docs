---
sidebar_position: 2
---

# Accessing logs

You can access logs in two ways:
- With dozzle (web interface)
- With docker command

## Dozzle

Just click on the logs button on frontend or go to /logs and log in with your logs user.

## Docker logs

You can also access logs with docker logs command. Just run this command in project root:

```bash
docker compose logs -f
```