import { ErrorResponse } from "./responder";

type HTTPErrorCodes =
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 421
  | 422
  | 423
  | 424
  | 425
  | 426
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 509
  | 510
  | 511;

export const httpErrors: { [key in HTTPErrorCodes]: string } = {
  400: "BadRequest",
  401: "Unauthorized",
  402: "PaymentRequired",
  403: "Forbidden",
  404: "NotFound",
  405: "MethodNotAllowed",
  406: "NotAcceptable",
  407: "ProxyAuthenticationRequired",
  408: "RequestTimeout",
  409: "Conflict",
  410: "Gone",
  411: "LengthRequired",
  412: "PreconditionFailed",
  413: "PayloadTooLarge",
  414: "URITooLong",
  415: "UnsupportedMediaType",
  416: "RangeNotSatisfiable",
  417: "ExpectationFailed",
  418: "ImATeapot",
  421: "MisdirectedRequest",
  422: "UnprocessableEntity",
  423: "Locked",
  424: "FailedDependency",
  425: "TooEarly",
  426: "UpgradeRequired",
  428: "PreconditionRequired",
  429: "TooManyRequests",
  431: "RequestHeaderFieldsTooLarge",
  451: "UnavailableForLegalReasons",
  500: "InternalInternalServerError",
  501: "NotImplemented",
  502: "BadGateway",
  503: "ServiceUnavailable",
  504: "GatewayTimeout",
  505: "HTTPVersionNotSupported",
  506: "VariantAlsoNegotiates",
  507: "InsufficientStorage",
  508: "LoopDetected",
  509: "BandwidthLimitExceeded",
  510: "NotExtended",
  511: "NetworkAuthenticationRequired"
};

export class BaseError extends Error {
  code: HTTPErrorCodes;
  data?: Record<string, unknown>;

  constructor(
    code: HTTPErrorCodes,
    message: Error["message"],
    data?: Record<string, unknown>
  ) {
    super(message);
    this.code = code;
    this.data = data || undefined;
  }

  logError() {
    const { logError, ...restValues } = this;

    console.error(
      JSON.stringify({
        status_code: this.code,
        error_code: this.name,
        message: this.message,
        data: this.data,
        stack: this.stack?.toString()
      })
    );
  }
}

export class AuthenticationError extends BaseError {
  constructor(message: Error["message"], data?: BaseError["data"]) {
    super(401, message, data);
    this.name = "authentication_error";
  }
}

export class AuthorizationError extends BaseError {
  constructor(message: Error["message"], data?: BaseError["data"]) {
    super(401, `Unauthorized: ${message}`, data);
    this.name = "authorization_error";
  }
}

export class ValidationError extends BaseError {
  constructor(message: Error["message"], data?: BaseError["data"]) {
    super(400, `Invalid: ${message}`, data);
    this.name = "validation_error";
  }
}
export class PayloadValidationError extends ValidationError {
  constructor(data: Record<string, string>) {
    super(`Invalid payload`, data);
  }
}
export class MissingParamError extends ValidationError {
  constructor(param: string) {
    super(`Missing Param: Param of :${param} is required`);
  }
}

export class NotFoundError extends BaseError {
  constructor(message: Error["message"], data?: BaseError["data"]) {
    super(404, `Not found: ${message}`, data);
    this.name = "validation_error";
  }
}

export class InternalServerError extends BaseError {
  constructor(message: Error["message"], data?: BaseError["data"]) {
    super(500, `Server error: ${message}`, data);
    this.name = "server_error";
  }
}

export class CustomError extends BaseError {
  constructor({
    message,
    code,
    name,
    data
  }: {
    message: Error["message"];
    code: HTTPErrorCodes;
    name?: string;
    data?: BaseError["data"];
  }) {
    super(code, message, data);
    this.name = name || "error";
  }
}

export class UnknownError extends BaseError {
  constructor() {
    super(500, "An unknown error occurred.");
    this.name = "unknown_error";
  }
}

export type ApiErrorResponse = {
  error_code: string;
  message: string;
  data?: Record<string, unknown>;
};

export const handleError = (
  err:
    | AuthenticationError
    | AuthorizationError
    | ValidationError
    | NotFoundError
    | InternalServerError
    | CustomError
) => {
  let body: ApiErrorResponse;
  switch (true) {
    case err instanceof AuthenticationError:
    case err instanceof AuthorizationError:
      body = {
        error_code: err.name,
        message: err.message,
        data: err.data
      };
      break;

    case err instanceof ValidationError:
    case err instanceof MissingParamError:
      body = {
        error_code: err.name,
        message: err.message,
        data: err.data
      };
      break;

    case err instanceof NotFoundError:
      body = {
        error_code: err.name,
        message: err.message,
        data: err.data
      };
      break;

    case err instanceof InternalServerError:
      body = {
        error_code: err.name,
        message: err.message,
        data: err.data
      };
      break;

    case err instanceof CustomError:
      body = {
        error_code: err.name,
        message: err.message,
        data: err.data
      };
      break;

    case err instanceof UnknownError:
    default:
      body = {
        error_code: err.name,
        message: err.message,
        data: err.data
      };
      break;
  }

  err.logError();
  const serializedBody = JSON.stringify(body, (_key, value) => {
    if (typeof value !== "undefined") return value;
  });
  const headers: ResponseInit["headers"] = {
    "Content-type": "application/json; charset=utf-8"
  };
  return new Response(serializedBody, {
    headers,
    status: err.code
  });
};
