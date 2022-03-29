import { getSession } from "./session.server";

export type ClientConfig = {
  baseUrl: string;
};

export type ClientRequestRoutes =
  // Users
  | "/user/:id"
  | "/user/upsert"

  // Images
  | "/image"
  | "/image/:id";

type MutateBase = Omit<RequestInit, "url" | "method" | "body"> & {
  url: ClientRequestRoutes;
};
export type WoodshopClientPOSTRequestConfig<TRequest = undefined> =
  TRequest extends Record<string, unknown> | FormData
    ? MutateBase & {
        body: TRequest;
      }
    : MutateBase & {
        body: RequestInit["body"];
      };

export type WoodshopClientResponse<ResponseData> = {
  config: RequestInit;
  data: ResponseData;
  response: Response;
};

export type WoodshopClientGETRequestConfig<TParams = undefined> =
  TParams extends Record<string, unknown>
    ? Omit<RequestInit, "method"> & {
        url: ClientRequestRoutes;
        params: Partial<TParams>;
      }
    : Omit<RequestInit, "method"> & {
        url: ClientRequestRoutes;
        params: never;
      };
export type WOodshopClientDELETERequestConfig<TParams = undefined> =
  WoodshopClientGETRequestConfig<TParams>;

export type WoodshopClientUPDATERequestConfig<
  TRequest extends Record<string, unknown> | FormData,
  TParams
> = Omit<RequestInit, "method" | "body" | "url"> & {
  url: ClientRequestRoutes;
  body: TRequest;
  params: Partial<TParams>;
  method: "PUT" | "PATCH";
};

const defaultConfig: ClientConfig = {
  baseUrl: "http://127.0.0.1:8888/api",
};

export class WoodshopClient {
  private config: ClientConfig;

  constructor(config?: ClientConfig) {
    this.config = { ...defaultConfig, ...config };
  }

  private getUrl(
    url: ClientRequestRoutes,
    params?: Record<string, unknown>
  ): string {
    if (!params) {
      return `${this.config.baseUrl}${url}`;
    }

    const newUrl = Object.entries(params).reduce<string>(
      (accum, [key, value]) => {
        return accum.replace(`:${key}`, value as string);
      },
      url
    );
    return `${this.config.baseUrl}${newUrl}`;
  }

  private async getHeaders(
    requestHeaders: HeadersInit | undefined
  ): Promise<HeadersInit> {
    const headers = new Headers(requestHeaders);
    const session = await getSession();
    const key = session.get(headers.get("cookie"));
    console.log(key);
    // if (key) {
    //   headers.append("Authorization", `Bearer ${key}`);
    // }
    return headers;
  }

  async get<FetchResponse, FetchParams = undefined>({
    url,
    params,
    headers,
  }: WoodshopClientGETRequestConfig<FetchParams>): Promise<
    WoodshopClientResponse<FetchResponse>
  > {
    // @ts-ignore
    const fetchUrl = this.getUrl(url, params);
    const fetchHeaders = await this.getHeaders(headers);
    const config = {
      headers: fetchHeaders,
      method: "GET",
    };

    try {
      const response = await fetch(fetchUrl, config);
      const data = await response.json<FetchResponse>();

      return {
        response,
        config,
        data,
      };
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async delete<FetchResponse, FetchParams = undefined>({
    url,
    params,
    headers,
  }: WOodshopClientDELETERequestConfig<FetchParams>): Promise<
    WoodshopClientResponse<FetchResponse>
  > {
    const fetchUrl = this.getUrl(url, params);
    const fetchHeaders = await this.getHeaders(headers);
    const config = {
      headers: fetchHeaders,
      method: "DELETE",
    };

    try {
      const response = await fetch(fetchUrl, config);
      const data = await response.json<FetchResponse>();

      return {
        response,
        config,
        data,
      };
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async update<
    FetchResponse,
    FetchRequest extends Record<string, unknown> | FormData,
    FetchParams
  >({
    url,
    headers,
    method,
    body,
    params,
  }: WoodshopClientUPDATERequestConfig<FetchRequest, FetchParams>): Promise<
    WoodshopClientResponse<FetchResponse>
  > {
    // @ts-ignore
    const fetchUrl = this.getUrl(url, params);
    const fetchHeaders = await this.getHeaders(headers);
    const config: RequestInit = {
      headers: fetchHeaders,
      method,
      body: body instanceof FormData ? body : JSON.stringify(body),
    };

    try {
      const response = await fetch(fetchUrl, config);
      const data = await response.json<FetchResponse>();

      return {
        response,
        config,
        data,
      };
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async post<FetchResponse, FetchRequest = unknown>({
    url,
    body,
    headers,
  }: WoodshopClientPOSTRequestConfig<FetchRequest>): Promise<
    WoodshopClientResponse<FetchResponse>
  > {
    const fetchUrl = this.getUrl(url);
    const fetchHeaders = await this.getHeaders(headers);
    const config = {
      headers: fetchHeaders,
      method: "POST",
      body: body instanceof FormData ? body : JSON.stringify(body),
    };

    try {
      const response = await fetch(fetchUrl, config);
      const data = await response.json<FetchResponse>();

      return {
        response,
        config,
        data,
      };
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async postFormData<FetchResponse>(
    url: ClientRequestRoutes,
    request: Request
  ): Promise<WoodshopClientResponse<FetchResponse>> {
    const fetchUrl = this.getUrl(url);
    const fetchHeaders = await this.getHeaders(request.headers);
    const config = {
      ...request,
      headers: fetchHeaders,
      method: "POST",
    };

    try {
      const response = await fetch(fetchUrl, config);
      const data = await response.json<FetchResponse>();

      return {
        response,
        config,
        data,
      };
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }
}

export const api = new WoodshopClient();
