FROM node:16.13.0

WORKDIR /usr/src/app

# Copy the yarn requirements (previously node modules)
# COPY .pnp.cjs                                 .
# COPY .pnp.loader.mjs                          .
COPY .yarnrc.yml                                .
COPY package.json                               .
COPY yarn.lock                                  .
COPY .yarn                                      ./.yarn
COPY package.json                               ./package.json

COPY packages/axios-fetch                       ./packages/axios-fetch
COPY packages/medusa-api                        ./packages/medusa-api
COPY packages/medusa-api/entrypoint.sh          ./entrypoint.sh

RUN yarn install
RUN yarn build

ENTRYPOINT ["sh", "./entrypoint.sh"]

