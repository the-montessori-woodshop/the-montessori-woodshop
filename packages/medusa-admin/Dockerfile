FROM node:16.13.0 as builder

WORKDIR /app/admin

RUN apt-get update
RUN apt-get install -y python

COPY package.json /app/admin/package.json
COPY packages/medusa-admin /app/admin/packages/medusa-admin

RUN yarn set version berry

COPY .pnp.cjs /app/admin/.pnp.cjs
COPY .pnp.loader.mjs /app/admin/.pnp.loader.mjs
COPY .yarnrc.yml /app/admin/.yarnrc.yml
COPY yarn.lock /app/admin/yarn.lock
COPY .yarn /app/admin/.yarn

RUN yarn install

# Build the app
RUN yarn workspace @woodshop/admin build

# COpy the output to the public file
COPY packages/medusa-admin/public /app/admin/public

FROM nginx
EXPOSE 80
COPY --from=builder /app/admin/public /usr/share/nginx/html

