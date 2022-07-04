import { prisma } from "../../utils/getPrisma";
import { HandleGETRequest } from "../../utils/handle.model";
import { MissingParamError, NotFoundError } from "../../utils/handleError";
import { handleRoute } from "../../utils/handleRoute";
import { GET_PostByIdApiParams, GET_PostByIdApiResponse } from "./post.model";

export const getPostById: HandleGETRequest<
  GET_PostByIdApiResponse,
  GET_PostByIdApiParams
> = async ({ params: { id } }) => {
  if (!id) throw new MissingParamError("id");

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id)
      }
    });
    return post;
  } catch (error) {
    throw new NotFoundError(`Could not retrieve post with id of ${id}`);
  }
};

export const handleGetPostById = handleRoute(getPostById);
