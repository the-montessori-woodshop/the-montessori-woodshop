import { authenticator } from "./auth.server";
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
  headers: Headers;
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
        headers: Headers;
      }
    : Omit<RequestInit, "method"> & {
        url: ClientRequestRoutes;
        params?: never;
        headers: Headers;
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
  headers: Headers;
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

  private async getAuthorizationHeader(
    requestHeaders: Headers
  ): Promise<Record<"authorization", string>> {
    if (requestHeaders.get("authorization")) {
      return {
        authorization: `${requestHeaders.get("authorization")}`,
      };
    }
    const session = await getSession(requestHeaders.get("cookie"));
    const key = await session.get(authenticator.sessionKey);
    if (key?.accessToken) {
      return {
        authorization: `Bearer ${key.accessToken}`,
      };
    }
    return {
      authorization: `Bearer no-token`,
    };
  }

  async get<FetchResponse, FetchParams = undefined>({
    url,
    params,
    headers,
  }: WoodshopClientGETRequestConfig<FetchParams>): Promise<
    WoodshopClientResponse<FetchResponse>
  > {
    const fetchUrl = this.getUrl(url, params);
    const fetchHeaders = await this.getAuthorizationHeader(headers);
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
    const fetchHeader = await this.getAuthorizationHeader(headers);
    const config = {
      headers: fetchHeader,
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
    method,
    headers,
    body,
    params,
  }: WoodshopClientUPDATERequestConfig<FetchRequest, FetchParams>): Promise<
    WoodshopClientResponse<FetchResponse>
  > {
    const fetchUrl = this.getUrl(url, params);
    const authHeader = await this.getAuthorizationHeader(headers);
    const config: RequestInit = {
      headers: {
        ...authHeader,
        "Content-type": "application/json",
      },
      method,
      body: JSON.stringify(body),
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
    const authHeader = await this.getAuthorizationHeader(headers);
    console.log(authHeader);
    const config = {
      headers: {
        ...authHeader,
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
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

  async postFormData<FetchResponse>(
    url: ClientRequestRoutes,
    request: Request
  ): Promise<WoodshopClientResponse<FetchResponse>> {
    const fetchUrl = this.getUrl(url);
    const authHeader = await this.getAuthorizationHeader(request.headers);
    request.headers.append("Authorization", authHeader.authorization);
    const config = {
      ...request,
      headers: request.headers,
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
      throw new Error(error as string);
    }
  }
}

export const api = new WoodshopClient();
