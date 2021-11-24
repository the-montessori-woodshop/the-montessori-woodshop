#!/bin/sh

cd /app

echo "Yarn Version:"
yarn --version

echo "Installing dependencies..."
yarn install

echo "Running migrations..."
yarn workspace @woodshop/backend migrate