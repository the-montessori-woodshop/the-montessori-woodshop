#!/bin/sh -l

USER_EMAIL="$1"
USER_NAME="$2"
REPO_NAME="$3"

set -e  # if a command fails it stops the execution
set -u  # script fails if trying to access to an undefined variable

git config --global user.email "$USER_EMAIL"
git config --global user.name "$USER_NAME"

# Get the storefront main branch and clone into `woodshop-storefront`
git clone --single-branch --branch main "https://$USER_NAME:$API_TOKEN_GITHUB@github.com/the-montessori-woodshop/woodshop-storefront.git"

# Make a temporary directory to copy the .git folder from `woodshop-storefront`
# Then delete the storefront to replace it with the files and folders we want
mkdir tmp
cp -r ./woodshop-storefront/.git ./tmp/.git
rm -rf ./woodshop-storefront

# Copy the contents fo the storefront package into the tmp dir
# Then copy the rest of the other packages we want to make a store monorepo
cp -a packages/storefront/. tmp/
mkdir tmp/packages
cp -r packages/components tmp/packages/components
cp -r packages/icons tmp/packages/icons
cp -r packages/illustrations tmp/packages/illustrations
cp -r packages/builder tmp/packages/builder
cp -r packages/axios-fetch tmp/packages/axios-fetch

# Install the packages to create the lockfile to be used
cd tmp
# npm install
# npm run build:ci

# Add everything and then commit and push to the storefront
# Any build mechanisms should be kicked off that are attached to this repo
git add .
git commit -m "Downstream mirror of changes: $GITHUB_SHA"
git push -u "https://$USER_NAME:$API_TOKEN_GITHUB@github.com/the-montessori-woodshop/woodshop-storefront.git" main
