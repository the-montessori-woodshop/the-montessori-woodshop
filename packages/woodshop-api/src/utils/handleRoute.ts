import { RouteHandler } from "itty-router";

export const handleRoute = (fn: any, statusCode: 200 | 201 = 200) => {
  const handle: RouteHandler<Request> = async (request: any) => {
    const data = await fn(request);
    const serializedBody = JSON.stringify(data);
    const headers: ResponseInit["headers"] = {
      "Content-type": "application/json; charset=utf-8"
    };
    return new Response(serializedBody, {
      headers,
      status: statusCode
    });
  };
  return handle;
};
