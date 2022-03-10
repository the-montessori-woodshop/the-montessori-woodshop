import { Post, PrismaClient } from "@prisma/client";

import { HandlePOSTRequest } from "../../types";
import { handleRoute } from "../../utils/handleRoute";

export type POST_NewPostByIdApiRequest = Omit<Post, "id">;
export type POST_NewPostByIdApiResponse = Post;

export const postNewPost: HandlePOSTRequest<
  POST_NewPostByIdApiResponse
> = async (request) => {
  const data = await request.json<POST_NewPostByIdApiRequest>();
  const prisma = new PrismaClient({
    errorFormat: "pretty"
  });
  try {
    await prisma.$connect();
    const post = await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        published: data.published
      }
    });
    return post;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const handlePostNewPost = handleRoute(postNewPost);
