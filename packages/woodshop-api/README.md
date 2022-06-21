# Woodshop Package | `@woodshop/api`

The woodshop API is Cloudflare Workers API hosted on cloudflare that houses all of the back office needs for the Montessori Woodshop.

It uses the Prisma Data Proxy to create serverless connections with the PostgresDB hosted on Render. There is currently only 1 DEV database and that is hosted on Render. The PROD DB is also hosted on render.

There is no DEV environment, but the DEV database is used as the local DB. If there at any point is another developer, we'll need to figure out another way to create a local instance. The DEV database is a free database so we're not charged.

## Getting Started

Ensure you have your environment variables set at the root of the repo in `.env` and then run the below commands

At the root of the repo, make sure the `woodshop_db` is up and running

```bash
docker compose up woodshop_db
```

In the `packages/woodshop_api/` directory, run the following commands

```bash
# Creates the Prisma client and runs migrations
yarn setup
# Starts the server up
yarn dev
```

## Environment Vars

There are 3 environment variables that you'll need and they're below. Each of them should be set using the `wrangler secret put` command. If they every change, the above command can be run again.

### `WOODSHOP_API_DATABASE_URL`

The data proxy URL found in the prisma data platform. This should be generated from the Prisma Data Platform in the development environment.

### `WOODSHOP_API_MIGRATE_DATABASE_URL`

The query string of the hosted DB

### `WOODSHOP_API_SHADOW_DATABASE_URL`

The local postgres docker database URL for comparisons during development migration

## Scripts

There are some scripts inside of the `/scripts` directory that help with the creation of the DB Client and also the migration of the DB. Some of the scripts required their abstraction into executable bash files for the management and replacement of variables during script runtime.

### Generate the Prisma Client - `yarn generate`

This generates the Prisma Client using the `data-proxy`. This ensures that we're using the edge functionality. This can be executed by running `yarn generate`

### Add a development migration - `yarn migrate-dev`

This creates a development migration against the DEV database. This is necessary to have this since due to the limitations of the data-proxy, migrations can only be run against the direct query string on the DB. This script switches the data proxy url with that of the query string and then runs the development migrations. All in all, it baseically runs the `primsa migrate dev` command while it switches the `WOODSHOP_API_DATABASE_URL` with the

### Deploy a migration - `yarn migrate`

This will run all of the migrations against the DB. This should be used when running these commands in CI.
