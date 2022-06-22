#!/bin/bash
set -e

yarn set version berry
yarn install --immutable
yarn workspace @woodshop/components build
yarn workspace store build