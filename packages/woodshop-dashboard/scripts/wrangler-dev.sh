#!/usr/bin/env bash
source ../../.env

# https://community.cloudflare.com/t/set-environment-variables-in-pages-with-functions-for-local-development-environment/395448/2
wrangler pages dev ./public --binding \
  WOODSHOP_AUTH0_CALLBACK_URL=$WOODSHOP_AUTH0_CALLBACK_URL \
  WOODSHOP_AUTH0_DOMAIN=$WOODSHOP_AUTH0_DOMAIN \
  WOODSHOP_AUTH0_DASHBOARD_CLIENT_ID=$WOODSHOP_AUTH0_DASHBOARD_CLIENT_ID \
  WOODSHOP_AUTH0_DASHBOARD_CLIENT_SECRET=$WOODSHOP_AUTH0_DASHBOARD_CLIENT_SECRET \
  WOODSHOP_AUTH0_AUDIENCE=$WOODSHOP_AUTH0_AUDIENCE