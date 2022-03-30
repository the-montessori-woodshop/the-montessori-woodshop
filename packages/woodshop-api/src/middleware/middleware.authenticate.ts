// const jwt = require("jsonwebtoken");
// const jsksRsa = require("jwks-rsa");

// const jwksClient = new jsksRsa.JwksClient({
//   jwksUri: "https://dev-3afbf-wy.us.auth0.com/.well-known/jwks.json",
//   cache: true,
//   rateLimit: true,
//   jwksRequestsPerMinute: 5
// });

const AUTH0_ISSUER = "https://dev-3afbf-wy.us.auth0.com/";
const AUTH0_AUDIENCE = "https://api.woodshop.themontessoriwoodshop.com";

import { parseJwt } from "@cfworker/jwt";

export const authenticate = async (request: Request) => {
  const authHeader = request.headers.get("Authorization")?.split(" ");
  if (authHeader?.[0] !== "Bearer") {
    throw new Error("Incorrectly formatted authorization header.");
  }
  if (!authHeader?.[1]) {
    throw new Error("Token not provided.");
  }
  const jwt = authHeader?.[1];
  console.log(jwt);

  const result = await parseJwt(jwt, AUTH0_ISSUER, AUTH0_AUDIENCE);
  if (!result.valid) {
    throw new Error(result.reason);
  } else {
    console.log(result.payload); // { iss, sub, aud, iat, exp, ...claims }
  }
};
