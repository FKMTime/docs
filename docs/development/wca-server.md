---
sidebar_position: 2
---


# WCA Server

FKMTime needs WCA server and WCA Live server to work properly.


## WCA website
By default, FKMTime uses [dummy-wca](https://github.com/maxidragon/dummy-wca), which is included in the `docker-compose.yml` file (at http://localhost:3005). With this as a WCA server, you can sign in with OAuth by choosing one of its accounts, and import competition.

Besides a few snapshot competitions, dummy-wca serves a generated test competition (invented people, a two-day schedule starting the day the server starts) and emulates WCA integrated live results for it. Open http://localhost:3005 to see every competition it knows and to generate new ones.

If you want to use real WCA Server you can either setup [local WCA Server](https://docs.worldcubeassociation.org/contributing/quickstart.html) or use a staging one (if you have access). If you want to use staging server just change `WCA_ORIGIN` of the backend in `docker-compose.yml` to `https://staging.worldcubeassociation.org`, and `VITE_WCA_ORIGIN` of the frontend to the same address.

## WCA Live

By default FKMTime uses [dummy-wca-live](https://github.com/maxidragon/dummy-wca-live), which is included in the `docker-compose.yml` file (at http://localhost:4000). It accepts results like the real WCA Live API. Set the scoretaking token to `wca-live-token` and this server will behave like real WCA Live server.

You can read how to setup local WCA Live server [here](https://github.com/thewca/wca-live?tab=readme-ov-file#developing-in-docker)
