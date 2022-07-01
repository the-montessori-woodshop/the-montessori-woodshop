FROM node:16.13.0 as builder

WORKDIR /usr/src/app

# Copy the yarn requirements (previously node modules)
# COPY .pnp.cjs                                 .
# COPY .pnp.loader.mjs                          .
COPY .yarnrc.yml                                .
COPY package.json                               .
COPY yarn.lock                                  .
COPY .yarn                                      ./.yarn
COPY package.json                               ./package.json

COPY packages/medusa-admin                      ./packages/medusa-admin

# Remove some files so workspaces can build fresh every time
RUN rm -rf ./packages/medusa-admin/yarn.lock
RUN rm -rf ./packages/medusa-admin/public
RUN rm -rf ./packages/medusa-admin/.cache

RUN yarn install && yarn build

# Create a small webserver
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /usr/src/app/packages/medusa-admin/public .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

