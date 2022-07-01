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

COPY packages/medusa-api                        ./packages/medusa-api
COPY packages/medusa-file-cloudflare-images     ./packages/medusa-file-cloudflare-images
COPY packages/medusa-api/entrypoint.sh          ./entrypoint.sh

RUN npm install --global @medusajs/medusa-cli@latest

RUN yarn install
RUN yarn build

ENTRYPOINT ["sh", "./entrypoint.sh"]

