export type HandleGETRequest = (
  request: FetchEvent["request"]
) => Promise<Response>;
