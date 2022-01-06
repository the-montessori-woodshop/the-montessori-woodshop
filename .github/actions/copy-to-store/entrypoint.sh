#!/bin/sh -l

USER_EMAIL="$1"
USER_NAME="$2"
REPO_NAME="$3"

set -e  # if a command fails it stops the execution
set -u  # script fails if trying to access to an undefined variable

git config --global user.email "$USER_EMAIL"
git config --global user.name "$USER_NAME"


git clone --single-branch --branch main "https://$USER_NAME:$API_TOKEN_GITHUB@github.com/the-montessori-woodshop/woodshop-store.git"

ls -all
ls woodshop-store -all

mkdir tmp
cp -r ./woodshop-store/.git ./tmp/.git
rm -rf ./woodshop-store

cp -r ./packages/store ./tmp/
mkdir ./tmp/packages
cp -r ./packages/components ./tmp/packages/components

cd tmp

git add .
git commit -m "Updates from: $GITHUB_SHA"
git push -u "https://$USER_NAME:$API_TOKEN_GITHUB@github.com/the-montessori-woodshop/woodshop-store.git" main

# cd "woodshop-store"
# rm -r ./packages/components
# cp -r ../packages/components ./packages/components
# git commit -m "chore: Replace components"

# git fetch https://github.com/the-montessori-woodshop/the-montessori-woodshop.git main && git merge FETCH_HEAD --allow-unrelated-histories
