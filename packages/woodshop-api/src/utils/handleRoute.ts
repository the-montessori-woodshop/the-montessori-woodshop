import Ajv, { JSONSchemaType } from "ajv";

import { RouteHandler } from "../../node_modules/itty-router/dist/itty-router";

const ajv = new Ajv({
  allErrors: true
});

export const handleRoute = (fn: any) => {
  const handle: RouteHandler<Request> = async (request: any) => {
    const data = await fn(request);
    const body = JSON.stringify(data);
    const headers = { "Content-type": "application/json" };
    return new Response(body, { headers });
  };
  return handle;
};

export const handleAndValidateRoute = <RequestShape>({
  method,
  schema
}: {
  method: any;
  schema: JSONSchemaType<RequestShape>;
}) => {
  const handle: RouteHandler<Request> = async (request: any) => {
    const validate = ajv.compile(schema);

    if (!validate(schema)) {
      throw new Error(JSON.stringify(validate.errors, null, 4));
    }

    const data = await method(request);
    const body = JSON.stringify(data);
    const headers = { "Content-type": "application/json" };
    return new Response(body, { headers });
  };
  return handle;
};
