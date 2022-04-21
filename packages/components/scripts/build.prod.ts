import { build } from "./build.config.js";

process.env.NODE_ENV = "production";

build({
  isProd: true
});
