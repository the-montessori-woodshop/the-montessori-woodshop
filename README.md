<p align="center">
  <a href="https://themontessoriwoodshop.com">
    <img alt="Medusa" src="./packages/medusa-storefront/public/logo-512x512-transparent.png" width="300"/>
  </a>
</p>
<h1 align="center">
  The Montessori Woodshop
</h1>

<h4 align="center">
  <a href="https://themontessoriwoodshop.com">Storefront</a> |
  <a href="https://components.themontessoriwoodshop.com">Components</a> |
  <a href="https://admin.themontessoriwoodshop.com">Admin</a> | 
  <a href="https://dashboard.themontessoriwoodshop.com">Dashboard</a>
</h4>

<p align="center">
The Montessori Woodshop is a family owned and operated woodshop that specializes in hand made montessori style furniture and toys that puts an extreme focus on craftsmanship, sustainability, and generational sustainability.
</p>
<p align="center">
  <!-- <a href="https://github.com/medusajs/medusa/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Medusa is released under the MIT license." />
  </a>
  <a href="https://circleci.com/gh/medusajs/medusa">
    <img src="https://circleci.com/gh/medusajs/medusa.svg?style=shield" alt="Current CircleCI build status." />
  </a>
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a> -->
</p>

## Getting Started

- TBD

## Environment Variables

| Category   | Name                                                                      | Platforms                           |
| ---------- | ------------------------------------------------------------------------- | ----------------------------------- |
| Build      | [`NODE_ENV`](#nodeenv)                                                    | Used for build time development     |
| Admin      | [`GATSBY_MEDUSA_BACKEND_URL`](#GATSBY_MEDUSA_BACKEND_URL)                 | API URL for access                  |
| Medusa     | [`JWT_SECRET`](#JWT_SECRET)                                               | Secret for authentication           |
| Medusa     | [`COOKIE_SECRET`](#COOKIE_SECRET)                                         | Secret for cookie transmission      |
| Medusa     | [`MEDUSA_PORT`](#MEDUSA_PORT)                                             | API Port for access                 |
| Medusa     | [`MEDUSA_ADMIN_CORS`](#MEDUSA_ADMIN_CORS)                                 | URL of Admin Application            |
| Medusa     | [`MEDUSA_STORE_CORS`](#MEDUSA_STORE_CORS)                                 | URL of Storefront Application       |
| Medusa     | [`MEDUSA_REDIS_HOST`](#MEDUSA_REDIS_HOST)                                 | Redis URL                           |
| Medusa     | [`MEDUSA_REDIS_PORT`](#MEDUSA_REDIS_PORT)                                 | Redis Port                          |
| Medusa     | [`MEDUSA_STRIPE_API_KEY`](#MEDUSA_STRIPE_API_KEY)                         | Secret for Stripe Access            |
| Medusa     | [`MEDUSA_STRIPE_WEBHOOK_SECRET`](#MEDUSA_STRIPE_WEBHOOK_SECRET)           | Secrete for Stripe Webhook Access   |
| Medusa     | [`MEDUSA_CLOUDFLARE_IMAGE_API_TOKEN`](#MEDUSA_CLOUDFLARE_IMAGE_API_TOKEN) | Token to upload images to CF        |
| Cloudflare | [`CLOUDFLARE_ACCOUNT_ID`](#CLOUDFLARE_ACCOUNT_ID)                         | Token used for CI deployments to CF |
| Cloudflare | [`CLOUDFLARE_API_TOKEN_WORKERS`](#CLOUDFLARE_API_TOKEN_WORKERS)           | Token used for CI deployments to CF |
| Cloudflare | [`CLOUDFLARE_API_TOKEN_PAGES`](#CLOUDFLARE_API_TOKEN_PAGES)               | Token used for CI deployments to CF |
| API        | [`WOODSHOP_API_DATABASE_URL`](#WOODSHOP_API_DATABASE_URL)                 | URL of Database\*                   |
| API        | [`WOODSHOP_API_MIGRATE_DATABASE_URL`](#WOODSHOP_API_MIGRATE_DATABASE_URL) | Migration URL when developing       |
| API        | [`WOODSHOP_API_SHADOW_DATABASE_URL`](#WOODSHOP_API_SHADOW_DATABASE_URL)   | Shadow URL when developing          |

### `NODE_ENV`

Should be set to either `development` or `production`. This tells the application at build time what target it's building for. This can be set either in the `.env` file or on the path of the process will be using it. The later is the most important.

#### Packages Used

- [`medusa-admin`](./packages/medusa-admin/README.md)
- [`@woodshop/api`](./packages/woodshop-api/README.md)

#### Platforms

- Github Actions (migrate)
- Github Actions (deploy)

### `GATSBY_MEDUSA_BACKEND_URL`

#### Packages Used

- [`medusa-admin`](./packages/medusa-admin/README.md)

#### Platforms

- Github Actions (deploy)

### `JWT_SECRET`

### `MEDUSA_PORT`

### `MEDUSA_ADMIN_CORS`

### `MEDUSA_STORE_CORS`

### `MEDUSA_REDIS_HOST`

### `MEDUSA_REDIS_PORT`

### `MEDUSA_STRIPE_API_KEY`

### `MEDUSA_STRIPE_WEBHOOK_SECRET`

### `MEDUSA_CLOUDFLARE_IMAGE_API_TOKEN`

This token is created on the Cloudflare dashboard and is then used with the Medusa API to enhance the admin function for how images are stored.

#### Packages Used

- [`medusa-api`](./packages/medusa-api/README.md)

#### Platforms

- Render

### `CLOUDFLARE_ACCOUNT_ID`

This is the token that is used to tell wrangler what account it should be targeting when running wrangler commands. This can go on the path of the process that is executed from yarn / npm scripts.

#### Packages Used

- [`@woodshop/api`](./packages/woodshop-api/README.md)
- [`@woodshop/dashboard`](./packages/woodshop-dashboard/README.md) (Remix)
- [`@woodshop/components`](./packages/components/README.md) (Storybook)
- [`medusa-admin`](./packages/medusa-admin/README.md) (Gatsby)
- [`medusa-storefront`](./packages/medusa-storefront/README.md) (Remix)

#### Platforms

- Github Actions (deploy)

### `CLOUDFLARE_API_TOKEN_WORKERS`

This is the token that is used to use with the wrangler CLI to upload cloudflare workers assets to the Cloudflare network.

#### Packages Used

- [`@woodshop/api`](./packages/woodshop-api/README.md)

#### Platforms

- Github Actions (deploy)

### `CLOUDFLARE_API_TOKEN_PAGES`

This is the token that is used to use the direct upload feature of angular to deploy static assets and function folders to cloudflare pages. This token is used in Github Actions and included on the path of the script that is used to kick off of the wrangler CLI.

#### Packages Used

- [`@woodshop/dashboard`](./packages/woodshop-dashboard/README.md) (Remix)
- [`@woodshop/components`](./packages/components/README.md) (Storybook)
- [`medusa-admin`](./packages/medusa-admin/README.md) (Gatsby)
- [`medusa-storefront`](./packages/medusa-storefront/README.md) (Remix)

#### Platforms

- Github Actions (deploy)

### `WOODSHOP_API_DATABASE_URL`

This URL is the environment variable that is used to tell Prisma where it should be connecting to the DB. This is a single environment variable that changes depending upon how it's used and where it is used. Since we're only using this database in the serverless environment, we need to make sure it is added to wrangler and that's done a little differently than putting it on the path of the process.

However, this is also needed when migrating the DB in CI so this should also go on the path when running the migrate commands

#### Packages Used

- [`@woodshop/api`](./packages/woodshop-api/README.md)

#### Platforms

- Github Actions (migrate)
- Wrangler (development)
- Wrangler (production)

### `WOODSHOP_API_MIGRATE_DATABASE_URL`

This URL is used only when developing locally. Since (as of this moment) the local workflow is using the Prisma data proxy, we cannot use the data proxy URL to migrate the DB. Instead we must use the external query string of the

### `WOODSHOP_API_SHADOW_DATABASE_URL`

# Deployment

Below is a matrix of where each of the solutions are deployed

| Category     | Service            | Method    | CF Pages | CF Workers | Render | Prisma Studio |
| ------------ | ------------------ | --------- | -------- | ---------- | ------ | ------------- |
| Medusa API   | Redis              | 1-Click   |          |            | X      |               |
| Medusa API   | Postgres           | 1-Click   |          |            | X      |               |
| Medusa API   | NodeJS API         | 1-Click   |          |            | X      |               |
| Storefront   | Remix              | GH Action | X        |            |        |               |
| Admin        | Gatsby             | 1-Click   | X        |            |        |               |
| Woodshop API | Postgres (Dev)     | 1-Click   |          |            | X      | X             |
| Woodshop API | Postgres (Prod)    | 1-Click   |          |            | X      | X             |
| Woodshop API | Postgres Shadow DB |           |          |            |        |               |
| Woodshop API | Serverless API     | GH Action |          | X          |        |               |
| Docs         | Components         | GH Action |          | X (sites)  |        |               |

# Development

## Starting all of the services

1. Create `.env` file at `/` (refer to the values in the `.env-sample`)
2. Create `.env` file at `/packages/woodshop-api/` (refer to the values in the `.env-sample`)
3. Run `docker-compose up -d` to:
   - Create the Medusa API PostgreSQL DB and run migrations and seed scripts
   - Create the Medusa API Redis cache and link it to the DB instance
   - Build and run the Medusa Administrator console

## Woodshop API

The below command will do the following:

- Generate a Prisma Client that can be consumed in your code
- Start the wrangler serverless service
- Listen for changes in the `packages/woodshop-api/src` folder

```bash
yarn api-dev
```

### Migrations

#### Developing the schema without making a migration

```
yarn api:push
```

#### Creating a migration

Due to the limitations of the Prisma DataProxy, you'll need to switch the `WOODSHOP_API_DATABASE_URL` to the direct query string of the database instead of the proxied URL. Also ensure that your ShadowDB is running using docker compose.

```
yarn api:migrate-dev
```

## Storefront

The below command will start the remix server using miniflare. Any changes that are made will automatically update the code and the page will refresh.

```bash
yarn dev
```

## Components

The below command will start up the Storybook solution so any components can be created in isolation.

```bash
yarn components-dev
```

Once you're satisfied with your components, in order to make sure that the Remix app can consume them, you'll need to run the below:

```bash
yarn components-build
```
