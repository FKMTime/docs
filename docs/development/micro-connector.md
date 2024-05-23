---
sidebar_position: 3
---

# Setup micro-connector

If you want to use real devices, you have to setup micro-connector for them. 

You can do it in two ways
- Using Docker
- Running micro-connector directly with Cargo

Clone micro-connector repo and navigate into it

```bash
git clone https://github.com/FKMTime/micro-connector
cd micro-connector
```

## Docker

Run the following command in the root directory of the project

```bash
docker compose up
```

## Running micro-connector directly with Cargo

#### Requirements
- Rust (version 1.55.0 or later)
- Cargo

Just run
```bash
cargo run
```
