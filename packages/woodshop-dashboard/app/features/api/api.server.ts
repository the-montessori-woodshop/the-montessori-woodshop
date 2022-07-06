import { authenticator } from "~/features/auth/auth.server";

import { getSession } from "../session/session.server";

export type ClientConfig = {
  baseUrl: string;
};

export type ClientRequestRoutes =
  // Users
  | "/user/:id"
  | "/user/upsert"

  // Posts
  | "/post"
  | "/post/:id"

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

export type WoodshopClientGETRequestConfig<
  TParams = undefined,
  TSearch = Record<string, unknown>
> = TParams extends Record<string, unknown>
  ? Omit<RequestInit, "method"> & {
      url: ClientRequestRoutes;
      params: Partial<TParams>;
      headers: Headers;
      search?: TSearch;
    }
  : Omit<RequestInit, "method"> & {
      url: ClientRequestRoutes;
      params?: never;
      headers: Headers;
      search?: TSearch;
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
  baseUrl: WOODSHOP_API_URL,
};

export class WoodshopClient {
  private config: ClientConfig;

  constructor(config?: ClientConfig) {
    this.config = { ...defaultConfig, ...config };
  }

  private getUrl<TSearch = Record<string, unknown>>(
    url: ClientRequestRoutes,
    params?: Record<string, unknown>,
    search?: TSearch
  ): string {
    let newUrl = `${this.config.baseUrl}${url}`;

    if (params) {
      newUrl = Object.entries(params).reduce<string>((accum, [key, value]) => {
        return accum.replace(`:${key}`, value as string);
      }, newUrl);
    }

    if (search) {
      const entiresToString = Object.entries(search).map(([key, value]) => [
        key,
        `${value}`,
      ]);
      const searchParams = new URLSearchParams(entiresToString).toString();
      newUrl = `${newUrl}?${searchParams}`;
    }

    return newUrl;
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

  private async handleResponse<JsonResponse>(res: Response) {
    if (!res.ok) {
      try {
        const jsonError = await res.json<JsonResponse>();
        throw jsonError;
      } catch (error) {
        const textError = await res.text();
        throw textError;
      }
    }
    const data = await res.json<JsonResponse>();
    return data;
  }

  async get<
    FetchResponse,
    FetchParams = undefined,
    FetchSearch = Record<string, unknown>
  >({
    url,
    params,
    headers,
    search,
  }: WoodshopClientGETRequestConfig<
    FetchParams,
    FetchSearch
  >): Promise<FetchResponse> {
    const fetchUrl = this.getUrl<FetchSearch>(url, params, search);
    const fetchHeaders = await this.getAuthorizationHeader(headers);
    const config = {
      headers: fetchHeaders,
      method: "GET",
    };
    const res = await API.fetch(fetchUrl, config);
    return this.handleResponse<FetchResponse>(res);
  }

  async delete<FetchResponse, FetchParams = undefined>({
    url,
    params,
    headers,
  }: WOodshopClientDELETERequestConfig<FetchParams>): Promise<FetchResponse> {
    const fetchUrl = this.getUrl(url, params);
    const fetchHeader = await this.getAuthorizationHeader(headers);
    const config = {
      headers: fetchHeader,
      method: "DELETE",
    };
    const res = await API.fetch(fetchUrl, config);
    return this.handleResponse<FetchResponse>(res);
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
  }: WoodshopClientUPDATERequestConfig<
    FetchRequest,
    FetchParams
  >): Promise<FetchResponse> {
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
    const res = await API.fetch(fetchUrl, config);
    return this.handleResponse<FetchResponse>(res);
  }

  async post<FetchResponse, FetchRequest = unknown>({
    url,
    body,
    headers,
  }: WoodshopClientPOSTRequestConfig<FetchRequest>): Promise<FetchResponse> {
    const fetchUrl = this.getUrl(url);
    const authHeader = await this.getAuthorizationHeader(headers);
    const config = {
      headers: {
        ...authHeader,
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    };
    const res = await API.fetch(fetchUrl, config);
    console.log("HERE!");
    return this.handleResponse<FetchResponse>(res);
  }

  async postMultipartFormData<FetchResponse>(
    url: ClientRequestRoutes,
    request: Request
  ): Promise<FetchResponse> {
    const fetchUrl = this.getUrl(url);
    const authHeader = await this.getAuthorizationHeader(request.headers);
    request.headers.append("Authorization", authHeader.authorization);
    const res = await API.fetch(fetchUrl, request);
    return this.handleResponse<FetchResponse>(res);
  }
}

export const api = new WoodshopClient();
