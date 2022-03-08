import { Post, PrismaClient } from "@prisma/client";

import { HandlePOSTRequest } from "../../types";
import { createRequestHandler } from "../../utils/createRequestHandler";

const prisma = new PrismaClient();

export type POST_NewPostByIdApiRequest = Omit<Post, "id">;
export type POST_NewPostByIdApiResponse = Post;

export const createNewPost: HandlePOSTRequest<
  POST_NewPostByIdApiRequest,
  POST_NewPostByIdApiResponse
> = async ({ data }) => {
  try {
    const post = await prisma.post.create({
      data: {
        title: data.title
      }
    });
    return post;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const handlePostNewPost = createRequestHandler(createNewPost);
