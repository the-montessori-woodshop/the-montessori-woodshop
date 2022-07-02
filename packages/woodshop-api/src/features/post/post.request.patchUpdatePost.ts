import { prisma } from "../../utils/getPrisma";
import { HandlePATCHRequest } from "../../utils/handle.model";
import { ApiError } from "../../utils/handleError";
import { handleRoute } from "../../utils/handleRoute";
import { verifyUserExists } from "../../utils/verifyUserExists";
import { postLogger } from "./post.log";
import {
  PATCH_UpdatePostByIdApiParams,
  PATCH_UpdatePostByIdApiRequest,
  PATCH_UpdatePostByIdApiResponse
} from "./post.model";

export const updatePost: HandlePATCHRequest<
  PATCH_UpdatePostByIdApiResponse,
  PATCH_UpdatePostByIdApiParams
> = async (request) => {
  verifyUserExists(request);
  postLogger.setLocation("patchUpdatePost");

  try {
    const data = await request.json<PATCH_UpdatePostByIdApiRequest>();
    postLogger.info(`Patching post...`, request.params.id, data);
    const post = await prisma.post.update({
      where: {
        id: Number(request.params.id)
      },
      data: {
        ...data,
        authorId: request.user?.id
      }
    });
    postLogger.info(`Patching post ...successful!`, request.params.id, post);
    return post;
  } catch (error) {
    throw new ApiError({
      code: 400,
      message: "Unable to update post",
      error
    });
  }
};

export const handleUpdatePost = handleRoute(updatePost);
