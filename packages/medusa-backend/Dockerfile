FROM node:16.13.0
WORKDIR /app

# copy only the package.json file so yarn set version can
# correctly download its modules for berry without overwriting
# the existing yarnrc and cache files. If the rc is added now,
# yarn will attempt to use the berry module without it being
# installed.
COPY package.json /app/package.json
COPY packages/medusa-backend /app/packages/medusa-backend
COPY packages/medusa-backend/entrypoint.sh /app/entrypoint.sh

RUN yarn set version berry

COPY .pnp.cjs /app/.pnp.cjs
COPY .pnp.loader.mjs /app/.pnp.loader.mjs
COPY .yarnrc.yml /app/.yarnrc.yml
COPY yarn.lock /app/yarn.lock
COPY .yarn /app/.yarn

RUN yarn install

# Build the app
RUN yarn workspace @woodshop/backend build

RUN ls --all
RUN ls /app/.yarn/cache --all
RUN cat /app/packages/medusa-backend/package.json

ENTRYPOINT ["sh", "/app/entrypoint.sh"]

