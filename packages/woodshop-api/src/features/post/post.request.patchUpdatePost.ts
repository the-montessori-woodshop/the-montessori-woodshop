import { HandlePATCHRequest } from "../../types/index";
import { ApiError } from "../../utils/error.api";
import { FeatureError } from "../../utils/error.feature";
import { getPrisma } from "../../utils/getPrisma";
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
    const prisma = await getPrisma();
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
    throw new FeatureError({
      message: "Unable to update post",
      feature: "PatchUpdatePost",
      error
    });
  }
};

export const handleUpdatePost = handleRoute(updatePost);
