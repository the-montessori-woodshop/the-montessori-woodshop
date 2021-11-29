FROM node:16.13.0

WORKDIR /app/medusa

COPY package.json /app/medusa/package.json
COPY packages/medusa-backend/entrypoint.sh /app/medusa/entrypoint.sh

COPY packages/medusa-backend/src /app/medusa/packages/medusa-backend/src
COPY packages/medusa-backend/uploads /app/medusa/packages/medusa-backend/uploads
COPY packages/medusa-backend/.babelrc.js /app/medusa/packages/medusa-backend/.babelrc.js
COPY packages/medusa-backend/medusa-config.js /app/medusa/packages/medusa-backend/medusa-config.js
COPY packages/medusa-backend/package.json /app/medusa/packages/medusa-backend/package.json

RUN npm install --no-package-lock --only production

# Build the app
RUN npm run build --workspace backend

ENTRYPOINT ["sh", "/app/medusa/entrypoint.sh"]

