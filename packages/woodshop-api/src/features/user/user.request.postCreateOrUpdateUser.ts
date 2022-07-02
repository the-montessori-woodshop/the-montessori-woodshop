import { prisma } from "../../utils/getPrisma";
import type { HandlePOSTRequest } from "../../utils/handle.model";
import { InternalServerError } from "../../utils/handleError";
import { handleRoute } from "../../utils/handleRoute";
import type {
  POST_CreateOrUpdateUserApiRequest,
  POST_CreateOrUpdateUserApiResponse
} from "./user.model";

export const createOrUpdateUser: HandlePOSTRequest<
  POST_CreateOrUpdateUserApiResponse
> = async (request) => {
  try {
    const requestData = await request.json<POST_CreateOrUpdateUserApiRequest>();
    const user = await prisma.user.upsert({
      where: {
        email: requestData.email || undefined
      },
      update: {
        last_logged_in: new Date()
      },
      create: {
        email: requestData.email,
        username: requestData.username,
        first_name: "",
        last_name: ""
      }
    });
    return user;
  } catch (error) {
    throw new InternalServerError("Unable to update user");
  }
};

export const handleCreateOrUpdateUser = handleRoute(createOrUpdateUser);
