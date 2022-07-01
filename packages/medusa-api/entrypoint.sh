#!/bin/sh

echo "Running migrations..."
yarn workspace medusa-api migrate
echo "Running migrations... done."
echo "Running version migrations - 1.3.0..."
yarn node ./node_modules/@medusajs/medusa/dist/scripts/line-item-adjustment-migration.js
yarn node ./node_modules/@medusajs/medusa/dist/scripts/discount-rule-migration.js
echo "Running version migrations - 1.3.0... done."

echo "Starting medusa..."
yarn workspace medusa-api start
# npm run start --workspace medusa