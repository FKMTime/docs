---
sidebar-position: 2
---

# E2E backend tests

FKMTime has a set of E2E tests that are testing the backend part of the application. These tests are using the real database.

## Running tests

1. Go to the `backend` directory and reset the database
```bash
npm run prisma:reset
```

2. Seed the database with test data
```bash
npm run prisma:seed-test
```

3. Run the tests
```bash
npm run test:e2e
```

:::note
E2E will run after every push to the repository, so you can check the status of the tests in the GitHub Actions tab.
:::