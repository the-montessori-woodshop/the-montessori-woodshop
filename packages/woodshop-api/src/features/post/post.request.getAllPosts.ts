import { prisma } from "../../utils/getPrisma";
import { HandleGETRequest } from "../../utils/handle.model";
import { ApiError } from "../../utils/handleError";
import { handleRoute } from "../../utils/handleRoute";
import { parseUrlSearchParams } from "../../utils/parseUrlSearchParams";
import { GET_PostsApiResponse, GET_PostsApiSearchParams } from "./post.model";

export const getPosts: HandleGETRequest<GET_PostsApiResponse> = async ({
  url
}) => {
  try {
    const params = parseUrlSearchParams<GET_PostsApiSearchParams>(url);
    const posts = await prisma.post.findMany({
      where: {
        published: params?.published || undefined
      }
    });
    return posts;
  } catch (error) {
    throw new ApiError({
      code: 400,
      message: "Unable to get posts",
      error
    });
  }
};

export const handleGetPosts = handleRoute(getPosts);
