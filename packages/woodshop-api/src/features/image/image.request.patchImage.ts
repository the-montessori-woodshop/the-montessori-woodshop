import { Post, PrismaClient } from "@prisma/client";

import { HandlePATCHRequest } from "../../types/index";
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
  const prisma = new PrismaClient({
    errorFormat: "pretty"
  });

  try {
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
    // @ts-ignore
    throw new Error(error);
  }
};

export const handlePatchImage = handleRoute(patchImage);