#!/bin/bash
set -e

npm run build:npm --workspace=packages/components
npm run build:npm
