import { prisma } from "../../utils/getPrisma";
import type { HandleGETRequest } from "../../utils/handle.model";
import { InternalServerError } from "../../utils/handleError";
import { handleRoute } from "../../utils/handleRoute";
import type { GET_GetUsers } from "./user.model";

export const getUsers: HandleGETRequest<GET_GetUsers> = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw new InternalServerError("Unable to update user");
  }
};

export const handleGetUsers = handleRoute(getUsers);
