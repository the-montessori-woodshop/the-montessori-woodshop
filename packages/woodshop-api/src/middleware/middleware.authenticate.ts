// import { jwtVerify } from "jose";

export const authenticate = (request: Request) => {
  console.log("Authenticating....", request.headers.get("Authorization"));
  // @ts-ignore
  // console.log(JSON.stringify(request.headers.get(), null, 4));
  // console.log
  // var jwtCheck = jwt({
  //   secret: jwks.expressJwtSecret({
  //     cache: true,
  //     rateLimit: true,
  //     jwksRequestsPerMinute: 5,
  //     jwksUri: "https://dev-3afbf-wy.us.auth0.com/.well-known/jwks.json"
  //   }),
  //   audience: "https://api.woodshop.themontessoriwoodshop.com",
  //   issuer: "https://dev-3afbf-wy.us.auth0.com/",
  //   algorithms: ["RS256"]
  // });
  // const { payload, protectedHeader } = await jwtVerify(jwt, publicKey, {
  //   issuer: "urn:example:issuer",
  //   audience: "urn:example:audience"
  // });
  // const jwtVer;
  // console.log("validating JWT...");
};
