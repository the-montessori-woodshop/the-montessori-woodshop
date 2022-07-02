import { prisma } from "../../utils/getPrisma";
import { HandlePATCHRequest } from "../../utils/handle.model";
import { ApiError } from "../../utils/handleError";
import { handleRoute } from "../../utils/handleRoute";
import {
  PATCH_ImagesApiParams,
  PATCH_ImagesApiRequest,
  PATCH_ImagesApiResponse
} from "./image.model";

export const patchImage: HandlePATCHRequest<
  PATCH_ImagesApiResponse,
  PATCH_ImagesApiParams
> = async (request) => {
  if (!request.params.id) throw new Error(":id is required.");

  try {
    const data = await request.json<PATCH_ImagesApiRequest>();
    const image = await prisma.image.update({
      where: {
        id: Number(request.params.id)
      },
      data
    });
    return image;
  } catch (error) {
    throw new ApiError({
      code: 400,
      message: "Error when patching image",
      error
    });
  }
};

export const handlePatchImage = handleRoute(patchImage);
