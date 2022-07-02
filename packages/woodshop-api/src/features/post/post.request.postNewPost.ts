import { prisma } from "../../utils/getPrisma";
import { HandlePOSTRequest } from "../../utils/handle.model";
import { ApiError } from "../../utils/handleError";
import { handleRoute } from "../../utils/handleRoute";
import {
  POST_NewPostByIdApiRequest,
  POST_NewPostByIdApiResponse
} from "./post.model";

export const postNewPost: HandlePOSTRequest<
  POST_NewPostByIdApiResponse
> = async (request) => {
  if (!request.user) {
    throw new ApiError({
      code: 401,
      message: "Not Authorized"
    });
  }

  try {
    const data = await request.json<POST_NewPostByIdApiRequest>();

    const post = await prisma.post.create({
      data: {
        ...data,
        authorId: request.user.id
      }
    });
    return post;
  } catch (error) {
    throw new ApiError({
      code: 400,
      message: "Unable to create new post.",
      error
    });
  }
};

export const handlePostNewPost = handleRoute(postNewPost);
