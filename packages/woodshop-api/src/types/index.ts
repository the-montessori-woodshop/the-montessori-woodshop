export type HandleGETRequest<
  ResponseDataShape = any,
  Params = Record<string, unknown>
> = (
  request: FetchEvent["request"] & {
    params: Params;
  }
) => Promise<ResponseDataShape>;

export type HandlePOSTRequest<RequestData, ResponseData> = (
  request: FetchEvent["request"] & {
    data: RequestData;
  }
) => Promise<ResponseData>;
