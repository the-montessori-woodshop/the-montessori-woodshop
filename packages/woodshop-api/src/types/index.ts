import { WoodshopClientRequestConfig } from "../client/Client.resource";

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

export type ClientPOSTRequest<T = unknown> = Omit<
  WoodshopClientRequestConfig<T>,
  "url" | "method"
>;
