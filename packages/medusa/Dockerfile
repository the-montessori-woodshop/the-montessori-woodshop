FROM node:16.13.0

WORKDIR /app/medusa

COPY package.json /app/medusa/package.json
COPY packages/medusa/entrypoint.sh /app/medusa/entrypoint.sh

COPY packages/medusa-file-cloudflare-images /app/medusa/packages/medusa-file-cloudflare-images

COPY packages/medusa/src /app/medusa/packages/medusa/src
COPY packages/medusa/uploads /app/medusa/packages/medusa/uploads
COPY packages/medusa/data /app/medusa/packages/medusa/data
COPY packages/medusa/.babelrc.js /app/medusa/packages/medusa/.babelrc.js
COPY packages/medusa/medusa-config.js /app/medusa/packages/medusa/medusa-config.js
COPY packages/medusa/package.json /app/medusa/packages/medusa/package.json

RUN yarn install --frozen-lockfile --production=true

# Build the app
RUN yarn workspace medusa-file-cloudflare-images build
RUN yarn workspace medusa build

ENTRYPOINT ["sh", "/app/medusa/entrypoint.sh"]

