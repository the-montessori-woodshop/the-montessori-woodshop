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

## Deployment

There are 2 github actions for deploying the API.

1. `migrate_woodshop_api`
2. `deploy_woodshop_api`

Migration is run first and uses a Github Action secret that is added to the shell, `WOODSHOP_API_DATABASE_URL` to connect to the DB via the `External Connection String` provided from render. The migrations are run and then the deploy step is run. This step does not need to have any environment variables added to `wrangler` since we're only interacting with Prisma and our PostgresDB at the moment.

However, when deploying, we use the `wrangler` CLI to be able to deploy it to the Cloudflare network. Since we're doing this, we cannot use Environment Variables the way we usually do. When deploying, we need to make sure that we have variables added to `wrangler` and more specifically the wrangler production environment.

Once those variables are added, the script will deploy to Cloudflare without any issues.

> NOTE - We currently don't have a development environment. If we did then we would also have to add some CI steps for development as well as add some wrangler secrets for DEV

### Helpful Recipes Scripts

To see all of the variables added in general, run

```bash
wrangler secret list --env production
```

To see all of the variables added for _**production**_, run

```bash
wrangler secret list --env production
```

To add a secret to wrangler, run

```bash
wrangler secret put ENV_VAR
```

To add a secret to the production environment in wrangler, run

```bash
wrangler secret put ENV_VAR --env production
```

## Gotchas

- The dev migration scripts are inside of a scripts folder and run as shell scripts so proper env variable replacement can happen when trying to migrate the development data proxy DB connection. Using them inline in side of the package.json wasn't working so this was a better alternative
- The `build` command isn't actually building anything in ESBuild. Instead it is proxy-ing the build to the Wrangler API in order to make sure that wrangler can own as much of the process as possible. In wrangler, defining the `main` key is a way to tell wrangler where the worker request starts. In this case, its in the `src/index.ts` file. However, the `build` step is actually running the `build and deploy` "methods" or concepts for the worker. If it fails, then it fails either the build or the deploy steps that are both handled by wrangler.
- The commented out lines in the `wrangler.toml` file are for the secrets that should be added to wrangler. See above
