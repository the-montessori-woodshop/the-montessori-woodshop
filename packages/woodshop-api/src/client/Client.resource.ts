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
      // headers?: Record<string, unknown>;
      body: T;
    }
  : {
      method: ClientRequestMethod;
      url: string;
      // headers?: Record<string, unknown>;
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
    // headers = {},
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
      console.log(error);
      return {
        config: requestConfig,
        data: {} as unknown as R
      };
    }
  }
}
