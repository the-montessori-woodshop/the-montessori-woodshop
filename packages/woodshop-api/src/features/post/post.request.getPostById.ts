import { prisma } from "../../utils/getPrisma";
import { HandleGETRequest } from "../../utils/handle.model";
import { ApiError } from "../../utils/handleError";
import { handleRoute } from "../../utils/handleRoute";
import { GET_PostByIdApiParams, GET_PostByIdApiResponse } from "./post.model";

export const getPostById: HandleGETRequest<
  GET_PostByIdApiResponse,
  GET_PostByIdApiParams
> = async ({ params: { id } }) => {
  if (!id) {
    throw new ApiError({
      code: 400,
      message: ":id is required."
    });
  }

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id)
      }
    });
    return post;
  } catch (error) {
    throw new ApiError({
      code: 400,
      message: "Could not retrieve post",
      error
    });
  }
};

export const handleGetPostById = handleRoute(getPostById);
