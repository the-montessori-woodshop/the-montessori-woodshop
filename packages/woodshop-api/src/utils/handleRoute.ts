import { RouteHandler } from "itty-router";

export const handleRoute = (fn: any) => {
  const handle: RouteHandler<Request> = async (request: any) => {
    const data = await fn(request);
    const body = JSON.stringify(data);
    const headers = { "Content-type": "application/json" };
    return new Response(body, { headers });
  };
  return handle;
};
