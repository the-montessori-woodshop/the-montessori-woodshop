import { ApiError } from "./handleError";

export const verifyUserExists = (request: Request) => {
  if (!request.user) {
    throw new ApiError({
      code: 401,
      message: "Unauthorized. User cannot be found."
    });
  }
};
