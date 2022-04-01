import { PrismaClient } from "@prisma/client";

import { HandlePATCHRequest } from "../../types/index";
import { handleRoute } from "../../utils/handleRoute";
import {
  PATCH_UpdatePostByIdApiParams,
  PATCH_UpdatePostByIdApiRequest,
  PATCH_UpdatePostByIdApiResponse
} from "./post.model";

export const updatePost: HandlePATCHRequest<
  PATCH_UpdatePostByIdApiResponse,
  PATCH_UpdatePostByIdApiParams
> = async (request) => {
  if (!request.user) {
    throw new Error("Not Authorized.");
  }

  try {
    const data = await request.json<PATCH_UpdatePostByIdApiRequest>();

    const prisma = new PrismaClient({
      errorFormat: "pretty"
    });

    await prisma.$connect();
    const post = await prisma.post.create({
      data: {
        ...data,
        authorId: request.user.id
      }
    });
    return post;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const handleUpdatePost = handleRoute(updatePost);
