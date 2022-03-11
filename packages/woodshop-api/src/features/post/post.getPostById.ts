import { Post, PrismaClient } from "@prisma/client";

import { HandleGETRequest } from "../../types";
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
    // @ts-ignore
    throw new Error(error);
  }
};

export const handleGetPostById = handleRoute(getPostById);
