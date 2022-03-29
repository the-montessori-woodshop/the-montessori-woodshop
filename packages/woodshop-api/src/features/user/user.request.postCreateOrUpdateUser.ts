import { PrismaClient } from "@prisma/client";

import { HandlePOSTRequest } from "../../types/index";
import { handleRoute } from "../../utils/handleRoute";
import {
  POST_CreateOrUpdateUserApiRequest,
  POST_CreateOrUpdateUserApiResponse
} from "./user.model";

export const createOrUpdateUser: HandlePOSTRequest<
  POST_CreateOrUpdateUserApiResponse
> = async (request) => {
  const prisma = new PrismaClient({
    errorFormat: "pretty"
  });

  try {
    await prisma.$connect();
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
    throw new Error(error as string);
  }
};

export const handleCreateOrUpdateUser = handleRoute(createOrUpdateUser);
