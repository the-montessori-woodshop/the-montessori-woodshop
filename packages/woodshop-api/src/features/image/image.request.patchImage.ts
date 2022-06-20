import { Post, PrismaClient } from "@prisma/client/edge";

import { HandlePATCHRequest } from "../../types/index";
import { ApiError } from "../../utils/error.api";
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
    const prisma = new PrismaClient({
      errorFormat: "pretty"
    });
    await prisma.$connect();
    const data = await request.json<PATCH_ImagesApiRequest>();
    const image = await prisma.image.update({
      where: {
        id: Number(request.params.id)
      },
      data
    });
    return image;
  } catch (error) {
    throw new ApiError("Error when patching image", error);
  }
};

export const handlePatchImage = handleRoute(patchImage);
