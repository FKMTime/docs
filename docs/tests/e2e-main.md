---
sidebar_position: 2
---

# Backend and browser tests

FKMTime has three sets of tests in the main repository:

- **Unit tests** for the backend and the frontend
- **Backend E2E tests**, which test the API and the socket.io gateway against a
  real database
- **Browser E2E tests** (Playwright), which drive the real frontend against the
  real backend

## Unit tests

```bash
cd backend && npm run test:no-watch
cd frontend && npm run test:no-watch
```

## Backend E2E tests

Backend E2E tests need PostgreSQL and the dummy WCA services. Start them with
the test stack in the root directory of the project:

```bash
docker compose -f docker-compose-test.yml up -d
```

1. Go to the `backend` directory and create the database tables
```bash
cd backend
npx prisma db push
```

2. Seed the database with test data
```bash
npm run prisma:seed-test
```

The test seed imports the competition that the dummy WCA generates, so its
schedule starts on the day the dummy WCA started. To reset the database later,
run `npm run prisma:reset` and seed it again.

3. Run the tests
```bash
npm run test:e2e
```

## Browser E2E tests

Browser tests start the backend and frontend themselves and use the same test
stack. Run `npm ci` in `backend` and `frontend` first, then:

```bash
cd e2e
npm ci
npx playwright install chromium
npx playwright test
```

To run a single file, pass it to Playwright, for example
`npx playwright test tests/auth.spec.ts`.

:::note
The tests run in GitHub Actions on pull requests that change the code they
cover, so you can check their status there.
:::
