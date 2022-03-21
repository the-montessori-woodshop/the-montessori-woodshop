import { WoodshopClient } from "@woodshop/api/client";

export default new WoodshopClient({
  baseUrl: "http://127.0.0.1:8888",
});

/// @ts-ignore
export type ApiResponse<T> = Awaited<ReturnType<T>>;
