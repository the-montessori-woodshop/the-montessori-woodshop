import { ApiError } from "../utils/error.api";
import { AuthenticationError } from "../utils/error.auth";
import { respondWith } from "../utils/responder";
import { Logger } from "./logger";

const log = new Logger({ location: "handleError" });

export const handleError = (error: ApiError | AuthenticationError) => {
  if (error instanceof AuthenticationError) {
    log.error(error.message, error);
    return respondWith.unauthorized({
      message: error.message
    });
  }

  if (error instanceof ApiError) {
    return respondWith.error({
      error: error.raw as string,
      message: error.message
    });
  }

  return respondWith.error({
    // @ts-ignore
    error: error.message,
    message: "Unhandled error."
  });
};
