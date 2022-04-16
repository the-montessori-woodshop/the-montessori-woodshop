import { HandlePATCHRequest } from "../../types/index";
import { ApiError } from "../../utils/error.api";
import { FeatureError } from "../../utils/error.feature";
import { handleRoute } from "../../utils/handleRoute";
import { initPrisma } from "../../utils/initPrisma";
import { verifyUserExists } from "../../utils/verifyUserExists";
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

  try {
    const data = await request.json<PATCH_UpdatePostByIdApiRequest>();
    const prisma = await initPrisma();
    const post = await prisma.post.update({
      where: {
        id: Number(request.params.id)
      },
      data: {
        ...data,
        authorId: request.user?.id
      }
    });
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
