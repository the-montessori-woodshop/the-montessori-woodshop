export * from "../features/post/post.model";
export * from "../features/image/image.model";
export * from "../features/user/user.model";

export type HandleGETRequest<
  ResponseDataShape = any,
  Params = Record<string, unknown>
> = (
  request: FetchEvent["request"] & {
    params: Params;
  }
) => Promise<ResponseDataShape>;

export type HandlePOSTRequest<ResponseData> = (
  request: FetchEvent["request"]
) => Promise<ResponseData>;

export type HandlePATCHRequest<
  ResponseDataShape = any,
  Params = Record<string, unknown>
> = (
  request: FetchEvent["request"] & {
    params: Params;
  }
) => Promise<ResponseDataShape>;

export type HandleDELETERequest<
  ResponseDataShape = any,
  Params = Record<string, unknown>
> = (
  request: FetchEvent["request"] & {
    params: Params;
  }
) => Promise<ResponseDataShape>;
