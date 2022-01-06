#!/bin/bash
set -e

cd ../components
npm install
npm run build:npm

cd ../store
npm run build:npm
