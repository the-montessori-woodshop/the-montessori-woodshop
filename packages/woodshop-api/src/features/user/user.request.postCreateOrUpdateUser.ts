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
        username: requestData.username
      },
      create: {
        username: requestData.username,
        first_name: "",
        last_name: ""
      }
    });
    return user;
  } catch (error) {
    // @ts-ignore
    throw new Error(error);
  }
};

export const handleCreateOrUpdateUser = handleRoute(createOrUpdateUser);

// export const handleCreateOrUpdateUser =
//   handleAndValidateRoute<POST_CreateOrUpdateUserApiRequest>({
//     method: createOrUpdateUser,
//     schema: {
//       type: "object",
//       required: ["username", "email"],
//       properties: {
//         username: {
//           type: "string"
//         },
//         email: {
//           type: "string"
//         }
//       },
//       additionalProperties: false
//     }
//   });
