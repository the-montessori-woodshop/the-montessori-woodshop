# Woodshop Package | `@woodshop/api`

The woodshop API is cloudflare workers api hosted on cloudflare that houses all of the back office needs for the Montessori Woodshop.

It uses the Prisma Data Proxy to create serverless connections with the PostgresDB hosted on Render. There is currently only 1 DEV database and that is hosted on Render. The PROD DB is also hosted on render.

There is no DEV environment, but the DEV database is used as the local DB.

> NOTE... this should be changed at some point to where the data proxy is only being used when being deployed to production and local development uses a docker image

## Environment Vars

### `WOODSHOP_API_DATABASE_URL`

The data proxy URL found in the prisma data platform

### `WOODSHOP_API_SHADOW_DATABASE_URL`

The local postgres docker database URL for comparisons during migration

### `WOODSHOP_API_MIGRATE_DATABASE_URL`

The hosted free render database that provides as the local database

## Future

There should be 3 steps with only 1 env var

- local will use the postgres docker db
- migrate step will generate prisma client and migrate using the value
- deploy step will use the data proxy url

all of the urls should be contained on the `WOODSHOP_API_DATABASE_URL` env var
