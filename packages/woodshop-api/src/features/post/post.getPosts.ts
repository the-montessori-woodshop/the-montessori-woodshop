import { Post, PrismaClient } from "@prisma/client";

import { HandleGETRequest } from "../../types";
import { handleRoute } from "../../utils/handleRoute";

const prisma = new PrismaClient({
  errorFormat: "pretty"
});

export type GET_PostsApiParams = Record<string, unknown>;
export type GET_PostsApiResponse = Post[] | null;

export const getPosts: HandleGETRequest<
  GET_PostsApiResponse,
  GET_PostsApiParams
> = async () => {
  try {
    const posts = await prisma.post.findMany();
    return posts;
  } catch (error) {
    // @ts-ignore
    throw new Error(error);
  }
};

export const handleGetPosts = handleRoute(getPosts);
