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

rm -r ./woodshop-store/packages/components
cp -r ./packages/components ./woodshop-store/packages/components

cd "woodshop-store"
git fetch https://github.com/the-montessori-woodshop/the-montessori-woodshop.git main && git merge FETCH_HEAD --allow-unrelated-histories

git commit -m "chore: Replace components"
git push -u "https://$USER_NAME:$API_TOKEN_GITHUB@github.com/the-montessori-woodshop/woodshop-store.git" main

# ls -all