import { Post, PrismaClient } from "@prisma/client";

import { HandleDELETERequest } from "../../types/index";
import { handleRoute } from "../../utils/handleRoute";
import { DELETE_ImageApiParams, DELETE_ImageApiResponse } from "./image.model";

export const deleteImage: HandleDELETERequest<
  DELETE_ImageApiResponse,
  DELETE_ImageApiParams
> = async (request) => {
  if (!request.params.id) throw new Error(":id is required.");
  const prisma = new PrismaClient({
    errorFormat: "pretty"
  });

  try {
    await prisma.$connect();
    await prisma.image.delete({
      where: {
        id: Number(request.params.id)
      }
    });
    return {
      message: "Successfully deleted"
    };
  } catch (error) {
    // @ts-ignore
    throw new Error(error);
  }
};

export const handleDeleteImage = handleRoute(deleteImage);