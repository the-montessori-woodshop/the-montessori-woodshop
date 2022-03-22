import { PrismaClient } from "@prisma/client";

import { HandleGETRequest } from "../../types/index";
import { handleRoute } from "../../utils/handleRoute";
import { GET_PostsApiParams, GET_PostsApiResponse } from "./post.model";

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
