#!/bin/sh

cd /app

echo "Yarn Version:"
yarn --version

echo "Running migrations..."
yarn workspace @woodshop/backend migrate