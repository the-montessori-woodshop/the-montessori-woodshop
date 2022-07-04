import { AuthenticationError } from "./handleError";

export const verifyUserExists = (request: Request) => {
  if (!request.user) {
    throw new AuthenticationError("User does not exist");
  }
};
