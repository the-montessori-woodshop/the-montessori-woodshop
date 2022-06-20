const respond = <T>(body: T, statusCode: number) => {
  const serializedBody = JSON.stringify(body);
  const headers: ResponseInit["headers"] = {
    "Content-type": "application/json; charset=utf-8"
  };
  console.log();
  return new Response(serializedBody, {
    headers,
    status: statusCode
  });
};

export type ErrorResponse = { error: string | undefined; message: string };
const error = (body: ErrorResponse) => respond(body, 500);

export type SuccessResponse<T> = T;
const ok = <T>(body: SuccessResponse<T>) => respond<T>(body, 200);

export type CreatedResponse = { message: string };
const created = (body: CreatedResponse) => respond(body, 500);

export type DeletedResponse = { message: string };
const deleted = (body: DeletedResponse) => respond(body, 201);

export type UnauthorizedResponse = { message: string };
const unauthorized = (body: UnauthorizedResponse) => respond(body, 201);

export const respondWith = {
  error,
  ok,
  created,
  deleted,
  unauthorized
};
