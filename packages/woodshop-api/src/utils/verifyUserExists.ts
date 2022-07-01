import { AuthenticationError } from "./error.auth";
// import { logger } from "./logger";

export const verifyUserExists = (request: Request) => {
  if (!request.user) {
    // logger.error(
    //   "Cannot find user on the request. This route is most likely has not been passed through the authentication middleware."
    // );
    throw new AuthenticationError("Unauthorized. User cannot be found.");
  }
};
