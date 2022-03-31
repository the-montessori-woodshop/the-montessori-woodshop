import { PrismaClient } from "@prisma/client";

import { HandlePUTRequest } from "../../types/index";
import { handleRoute } from "../../utils/handleRoute";
import {
  PUT_UpdatePostByIdApiParams,
  PUT_UpdatePostByIdApiRequest,
  PUT_UpdatePostByIdApiResponse
} from "./post.model";

export const postNewPost: HandlePUTRequest<
  PUT_UpdatePostByIdApiResponse,
  PUT_UpdatePostByIdApiParams
> = async (request) => {
  if (!request.user) {
    throw new Error("Not Authorized.");
  }

  try {
    const data = await request.json<PUT_UpdatePostByIdApiRequest>();

    const prisma = new PrismaClient({
      errorFormat: "pretty"
    });

    await prisma.$connect();
    const post = await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        published: data.published,
        authorId: request.user.id
      }
    });
    return post;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const handlePostNewPost = handleRoute(postNewPost);
