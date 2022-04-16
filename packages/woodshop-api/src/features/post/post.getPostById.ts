import { PrismaClient } from "@prisma/client";

import { HandleGETRequest } from "../../types/index";
import { ApiError } from "../../utils/error.api";
import { handleRoute } from "../../utils/handleRoute";
import { GET_PostByIdApiParams, GET_PostByIdApiResponse } from "./post.model";

export const getPostById: HandleGETRequest<
  GET_PostByIdApiResponse,
  GET_PostByIdApiParams
> = async ({ params: { id } }) => {
  if (!id) throw new Error(":id is required.");
  const prisma = new PrismaClient({
    errorFormat: "pretty"
  });

  try {
    await prisma.$connect();
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id)
      }
    });
    return post;
  } catch (error) {
    throw new ApiError("Could not retrieve post", error);
  }
};

export const handleGetPostById = handleRoute(getPostById);
