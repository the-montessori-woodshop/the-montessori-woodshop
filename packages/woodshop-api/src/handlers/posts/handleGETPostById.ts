import { Post, PrismaClient } from "@prisma/client";

import { HandleGETRequest } from "../../types";
import { createRequestHandler } from "../../utils/createRequestHandler";

const prisma = new PrismaClient();

export type GET_PostByIdApiParams = { id: string };
export type GET_PostByIdApiResponse = Post | null;

const getPostById: HandleGETRequest<
  GET_PostByIdApiResponse,
  GET_PostByIdApiParams
> = async ({ params: { id } }) => {
  if (!id) throw new Error(":id is required.");
  try {
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

export const handleGetPostById = createRequestHandler(getPostById);
