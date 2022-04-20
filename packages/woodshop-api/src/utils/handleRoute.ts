import { RouteHandler } from "itty-router";

import { respondWith } from "./responder";

export const handleRoute = (fn: any) => {
  const handle: RouteHandler<Request> = async (request: any) => {
    const data = await fn(request);
    return respondWith.ok(data);
  };
  return handle;
};
