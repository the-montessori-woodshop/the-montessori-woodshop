const AUTH0_ISSUER = "https://dev-3afbf-wy.us.auth0.com/";
const AUTH0_AUDIENCE = "https://api.woodshop.themontessoriwoodshop.com";

import { parseJwt } from "@cfworker/jwt";
import { PrismaClient } from "@prisma/client/edge";

import { AuthenticationError } from "../utils/error.auth";

export const authenticate = async (request: Request) => {
  const authHeader = request.headers.get("authorization")?.split(" ");
  if (authHeader?.[0] !== "Bearer") {
    throw new AuthenticationError("Unauthorized. Malformed bearer token");
  }
  if (!authHeader?.[1]) {
    throw new AuthenticationError("Unauthorized. Malformed request.");
  }
  const jwt = authHeader?.[1];

  const result = await parseJwt(jwt, AUTH0_ISSUER, AUTH0_AUDIENCE);
  if (!result.valid) {
    throw new AuthenticationError("Unauthorized. Token is not valid.");
  }

  const prisma = new PrismaClient({
    errorFormat: "pretty"
  });
  await prisma.$connect();

  try {
    const user = await prisma.user.findUnique({
      where: {
        username: result.payload.sub
      }
    });
    request.user = user;
  } catch (error) {
    throw new AuthenticationError("Verification error:  do not match.", error);
  }
};
