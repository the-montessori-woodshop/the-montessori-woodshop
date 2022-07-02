import { prisma } from "../../utils/getPrisma";
import { HandlePATCHRequest } from "../../utils/handle.model";
import { InternalServerError } from "../../utils/handleError";
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
    throw new InternalServerError("Unable to update image");
  }
};

export const handlePatchImage = handleRoute(patchImage);
