#!/bin/sh -l

set -e  # if a command fails it stops the execution
set -u  # script fails if trying to access to an undefined variable
# git config --global user.email "$USER_EMAIL"
# git config --global user.name "$USER_NAME"
git config --global user.email drewdecarme@gmail.com
git config --global user.name Drew DeCarme
# git clone --single-branch --branch main "https://$USER_NAME:$API_TOKEN_GITHUB@$GITHUB_SERVER/$DESTINATION_REPOSITORY_USERNAME/$DESTINATION_REPOSITORY_NAME.git"
git clone --single-branch --branch main "https://$USER_NAME:$API_TOKEN_GITHUB@github.com/the-montessori-woodshop/woodshop-store.git"
git fetch https://github.com/the-montessori-woodshop/the-montessori-woodshop.git main && git cherry-pick FETCH_HEAD