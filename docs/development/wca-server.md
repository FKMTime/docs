---
sidebar_position: 2 
---


# WCA Server

FKMTime needs WCA server and WCA Live server to work properly. 


## WCA website
By default, FKMTime uses [dummy-wca](https://github.com/maxidragon/dummy-wca) that is included in `docker-compose-dev.yml` file. With this as a WCA server, you can login using OAuth and import competition.

If you want to use real WCA Server you can either setup [local WCA Server](https://docs.worldcubeassociation.org/contributing/quickstart.html) or use a staging one (if you have access). If you want to use staging server just change `WCA_ORIGIN` in `docker-compose-dev.yml` file to `https://staging.worldcubeassociation.org` and update `frontend/src/logic/request.ts`;

## WCA Live
You can read how to setup local WCA Live server [here](https://github.com/thewca/wca-live?tab=readme-ov-file#developing-in-docker)