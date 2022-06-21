#!/usr/bin/env bash
source ../../.env
WOODSHOP_API_DATABASE_URL=$WOODSHOP_API_MIGRATE_DATABASE_URL yarn prisma migrate deploy