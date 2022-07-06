import { parseJwt } from "@cfworker/jwt";

import { prisma } from "../utils/getPrisma";
import { AuthenticationError, AuthorizationError } from "../utils/handleError";

export const authenticate = async (request: Request) => {
  const authHeader = request.headers.get("authorization")?.split(" ");
  if (authHeader?.[0] !== "Bearer") {
    throw new AuthorizationError("Malformed token.");
  }
  if (!authHeader?.[1]) {
    throw new AuthorizationError("Malformed request.");
  }
  const jwt = authHeader?.[1];

  const result = await parseJwt(
    jwt,
    WOODSHOP_AUTH0_API_ISSUER,
    WOODSHOP_AUTH0_AUDIENCE
  );
  if (!result.valid) {
    throw new AuthorizationError("Invalid token.");
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        username: result.payload.sub
      }
    });
    request.user = user;
  } catch (error) {
    throw new AuthenticationError("Cannot verify user.", { error });
  }
};
