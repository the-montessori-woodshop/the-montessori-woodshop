import { LoggerOptions } from "../src/utils/logger";
declare global {
  var WOODSHOP_AUTH0_API_ISSUER: string;
  var WOODSHOP_AUTH0_AUDIENCE: string;
  var CLOUDFLARE_IMAGE_API_TOKEN: string;
  var CLOUDFLARE_ACCOUNT_ID: string;
  var LOG_LEVEL: LoggerOptions["level"];
  var LOG_TYPE: LoggerOptions["type"];
}
