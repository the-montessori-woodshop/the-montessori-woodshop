#!/bin/bash
set -e

npm run build:npm --workspace=packages/icons
npm run build:npm --workspace=packages/illustrations
npm run build:npm --workspace=packages/components
npm run build:npm
