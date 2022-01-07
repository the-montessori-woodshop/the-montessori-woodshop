#!/bin/bash
set -e

npm run build:npm --workspace=packages/components
npm run build --workspace=packages/axios-fetch
npm run build:npm
