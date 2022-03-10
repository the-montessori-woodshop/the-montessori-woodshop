import { Post, PrismaClient } from "@prisma/client";

import { HandleGETRequest } from "../../types";
import { handleRoute } from "../../utils/handleRoute";

export type GET_PostsApiParams = Record<string, unknown>;
export type GET_PostsApiResponse = Post[] | null;

export const getPosts: HandleGETRequest<
  GET_PostsApiResponse,
  GET_PostsApiParams
> = async () => {
  const prisma = new PrismaClient({
    errorFormat: "pretty"
  });
  try {
    await prisma.$connect();
    const posts = await prisma.post.findMany();
    return posts;
  } catch (error) {
    // @ts-ignore
    throw new Error(error);
  }
};

export const handleGetPosts = handleRoute(getPosts);
