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
