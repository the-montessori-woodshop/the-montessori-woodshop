#!/bin/sh

cd /app

echo "Yarn Version:"
yarn --version

echo "Installing dependencies..."
npm install --no-package-lock --only production
# yarn install

echo "Running migrations..."
# yarn workspace @woodshop/backend migrate
npm run migrate --workspace @woodshop/backend
npm run start --workspace @woodshop/backend