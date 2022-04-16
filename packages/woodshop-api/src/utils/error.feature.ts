import { ApiError } from "./error.api";

export class FeatureError extends ApiError {
  raw: unknown;
  feature: string;

  constructor(params: { message: string; feature: string; error?: unknown }) {
    super(params.message);
    this.feature = params.feature;
    this.raw = params.error;
  }
}
