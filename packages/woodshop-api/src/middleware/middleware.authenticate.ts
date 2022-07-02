const WOODSHOP_AUTH0_API_ISSUER = "dev-hvidaktf.us.auth0.com";
const WOODSHOP_AUTH0_AUDIENCE = "http://localhost:9000";

import { parseJwt } from "@cfworker/jwt";

import { prisma } from "../utils/getPrisma";
// import { envVar } from "../utils/envVar";
import { ApiError } from "../utils/handleError";

export const authenticate = async (request: Request) => {
  const authHeader = request.headers.get("authorization")?.split(" ");
  if (authHeader?.[0] !== "Bearer") {
    throw new ApiError({
      code: 401,
      message: "Malformed bearer token"
    });
  }
  if (!authHeader?.[1]) {
    throw new ApiError({
      code: 401,
      message: "Malformed request."
    });
  }
  const jwt = authHeader?.[1];

  const result = await parseJwt(
    jwt,
    WOODSHOP_AUTH0_API_ISSUER,
    WOODSHOP_AUTH0_AUDIENCE
    // envVar("WOODSHOP_AUTH0_API_ISSUER"),
    // envVar("WOODSHOP_AUTH0_AUDIENCE")
  );
  if (!result.valid) {
    throw new ApiError({
      code: 401,
      message: "Token is not valid."
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        username: result.payload.sub
      }
    });
    request.user = user;
  } catch (error) {
    throw new ApiError({
      code: 500,
      message: "User verification error."
    });
  }
};
