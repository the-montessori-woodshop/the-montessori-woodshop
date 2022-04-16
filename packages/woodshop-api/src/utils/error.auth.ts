import { ApiError } from "./error.api";

export class AuthenticationError extends ApiError {
  raw: unknown;

  constructor(message: string, error?: unknown) {
    super(message);
    this.raw = error;
  }
}
