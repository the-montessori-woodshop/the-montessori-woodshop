#!/bin/sh -l

USER_EMAIL="$1"
USER_NAME="$2"
REPO_NAME="$3"

set -e  # if a command fails it stops the execution
set -u  # script fails if trying to access to an undefined variable

git config --global user.email "$USER_EMAIL"
git config --global user.name "$USER_NAME"


git clone --single-branch --branch main "https://$USER_NAME:$API_TOKEN_GITHUB@github.com/the-montessori-woodshop/woodshop-storefront.git"

mkdir tmp
cp -r ./woodshop-storefront/.git ./tmp/.git
rm -rf ./woodshop-storefront

cp -a packages/store/. tmp/
mkdir tmp/packages
cp -r packages/components tmp/packages/components
cp -r packages/builder tmp/packages/builder
cp -r packages/axios-fetch tmp/packages/axios-fetch

cd tmp
npm install

git add .
git commit -m "Downstream mirror of changes: $GITHUB_SHA"
git push -u "https://$USER_NAME:$API_TOKEN_GITHUB@github.com/the-montessori-woodshop/woodshop-storefront.git" main
