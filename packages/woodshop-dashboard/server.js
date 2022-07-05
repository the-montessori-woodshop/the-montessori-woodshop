import { createEventHandler } from "@remix-run/cloudflare-workers";
import * as build from "@remix-run/dev/server-build";

addEventListener(
  "fetch",
  createEventHandler({
    build,
    // eslint-disable-next-line no-undef
    mode: process.env.NODE_ENV,
  })
);
