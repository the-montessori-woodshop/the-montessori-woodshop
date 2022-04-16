export class AuthenticationError extends Error {
  raw: unknown;

  constructor(message: string, error?: unknown) {
    super(message);
    this.raw = error;
  }
}
