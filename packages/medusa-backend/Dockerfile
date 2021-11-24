FROM node:16.13.0

WORKDIR /app/medusa

COPY package.json /app/medusa/package.json
COPY packages/medusa-backend /app/medusa/packages/medusa-backend
COPY packages/medusa-backend/entrypoint.sh /app/medusa/entrypoint.sh

RUN yarn set version berry

COPY .pnp.cjs /app/medusa/.pnp.cjs
COPY .pnp.loader.mjs /app/medusa/.pnp.loader.mjs
COPY .yarnrc.yml /app/medusa/.yarnrc.yml
COPY yarn.lock /app/medusa/yarn.lock
COPY .yarn /app/medusa/.yarn

RUN yarn install

# Build the app
RUN yarn workspace @woodshop/backend build

ENTRYPOINT ["sh", "/app/medusa/entrypoint.sh"]

