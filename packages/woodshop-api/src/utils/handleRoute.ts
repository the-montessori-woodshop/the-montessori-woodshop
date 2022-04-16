import { RouteHandler } from "itty-router";

import { ApiError } from "./error.api";
import { AuthenticationError } from "./error.auth";
import { logger } from "./logger/index";
import { respondWith } from "./responder";

export const handleRoute = (fn: any) => {
  const handle: RouteHandler<Request> = async (request: any) => {
    const data = await fn(request);
    return respondWith.ok(data);
  };
  return handle;
};
