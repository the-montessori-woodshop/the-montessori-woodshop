export type ClientConfig = {
  baseUrl: string;
};

export type ClientRequestMethod = "GET" | "POST" | "PUT" | "DELETE";
export type WoodshopClientRequestConfig<T = unknown> = T extends Record<
  string,
  unknown
>
  ? {
      method: ClientRequestMethod;
      url: string;
      data: T;
    }
  : {
      method: ClientRequestMethod;
      url: string;
    };

export type WoodshopClientResponse<ResponseData> = {
  config: Omit<WoodshopClientRequestConfig, "data">;
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
    // data,
    url
  }: WoodshopClientRequestConfig<D>): Promise<WoodshopClientResponse<R>> {
    const requestConfig = {
      method,
      url: `${this.config.baseUrl}${url}`,
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json"
      }),
      keepalive: true
    };

    const res = await fetch(url, requestConfig);
    const data = await res.json<R>();

    return {
      config: requestConfig,
      data
    };
  }
}
