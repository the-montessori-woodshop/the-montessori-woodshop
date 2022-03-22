import { PrismaClient } from "@prisma/client";

import { HandleGETRequest } from "../../types/index";
import { handleRoute } from "../../utils/handleRoute";
import {
  GET_ImageByIdApiParams,
  GET_ImageByIdApiResponse
} from "./image.model";

export const getImageById: HandleGETRequest<
  GET_ImageByIdApiResponse,
  GET_ImageByIdApiParams
> = async ({ params: { id } }) => {
  if (!id) throw new Error(":id is required.");
  const prisma = new PrismaClient({
    errorFormat: "pretty"
  });

  try {
    await prisma.$connect();
    const image = await prisma.image.findUnique({
      where: {
        id: Number(id)
      }
    });
    return image;
  } catch (error) {
    // @ts-ignore
    throw new Error(error);
  }
};

export const handleGetImageById = handleRoute(getImageById);
