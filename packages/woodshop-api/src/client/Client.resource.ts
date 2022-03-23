export type ClientConfig = {
  baseUrl: string;
};

export type ClientRequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
export type WoodshopClientRequestConfig<T = unknown> = T extends
  | Record<string, unknown>
  | FormData
  ? {
      method: ClientRequestMethod;
      url: string;
      headers?: Headers;
      body: T | string;
    }
  : {
      method: ClientRequestMethod;
      url: string;
      headers?: Headers;
    };

export type WoodshopClientResponse<ResponseData> = {
  config: Omit<WoodshopClientRequestConfig, "data" | "headers">;
  data: ResponseData;
};

const defaultConfig: ClientConfig = {
  baseUrl: "http://127.0.0.1:8888"
};

export class Client {
  private config: ClientConfig;

  constructor(config: ClientConfig) {
    this.config = { ...defaultConfig, ...config };
  }

  async request<R, D = unknown>({
    method,
    url,
    ...restRequest
  }: WoodshopClientRequestConfig<D>): Promise<WoodshopClientResponse<R>> {
    const fetchUrl = `${this.config.baseUrl}${url}`;

    const requestConfig = {
      method,
      url: fetchUrl,
      ...restRequest
    };

    try {
      const res = await fetch(fetchUrl, requestConfig);
      const resData = await res.json<R>();

      return {
        config: requestConfig,
        data: resData
      };
    } catch (error) {
      return {
        config: requestConfig,
        data: {} as unknown as R
      };
    }
  }
}
