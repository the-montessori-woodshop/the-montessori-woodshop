<p align="center">
  <a href="https://themontessoriwoodshop.com">
    <img alt="Medusa" src="./packages/storefront/public/logo-512x512-transparent.png" width="300"/>
  </a>
</p>
<h1 align="center">
  The Montessori Woodshop
</h1>

<h4 align="center">
  <a href="https://themontessoriwoodshop.com">Website</a> |
  <a href="https://docs.themontessoriwoodshop.com">Components</a>
</h4>

<p align="center">
The Montessori Woodshop is a family owned and operated woodshop that specializes in hand made montessori style furniture and toys.
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
