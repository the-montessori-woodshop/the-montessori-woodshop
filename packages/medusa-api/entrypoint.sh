#!/bin/sh

echo "Running migrations..."
yarn workspace medusa-api migrate
# npm run migrate --workspace medusa

echo "Starting medusa..."
yarn workspace medusa-api start
# npm run start --workspace medusa