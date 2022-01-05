#!/bin/sh

echo "Running migrations..."
yarn workspace medusa migrate
# npm run migrate --workspace medusa

echo "Starting medusa..."
yarn workspace medusa start
# npm run start --workspace medusa