#!/bin/sh

cd /app/medusa

echo "Running migrations..."
# yarn workspace backend migrate
npm run migrate --workspace backend

echo "Starting medusa..."
# yarn workspace backend migrate
npm run start --workspace backend