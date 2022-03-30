import { PrismaClient } from "@prisma/client";

import { HandleGETRequest } from "../../types/index";
import { handleRoute } from "../../utils/handleRoute";
import { parseUrlSearchParams } from "../../utils/parseUrlSearchParams";
import { GET_PostsApiResponse, GET_PostsApiSearchParams } from "./post.model";

export const getPosts: HandleGETRequest<GET_PostsApiResponse> = async ({
  url
}) => {
  const prisma = new PrismaClient({
    errorFormat: "pretty"
  });
  try {
    await prisma.$connect();
    const params = parseUrlSearchParams<GET_PostsApiSearchParams>(url);
    const posts = await prisma.post.findMany({
      where: {
        published: params?.published || undefined
      }
    });
    return posts;
  } catch (error) {
    // @ts-ignore
    throw new Error(error);
  }
};

export const handleGetPosts = handleRoute(getPosts);
