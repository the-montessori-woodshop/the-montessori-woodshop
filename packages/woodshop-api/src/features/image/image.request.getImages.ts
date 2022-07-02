import { prisma } from "../../utils/getPrisma";
import { HandleGETRequest } from "../../utils/handle.model";
import { ApiError } from "../../utils/handleError";
import { handleRoute } from "../../utils/handleRoute";
import { GET_ImagesApiParams, GET_ImagesApiResponse } from "./image.model";

export const getImages: HandleGETRequest<
  GET_ImagesApiResponse,
  GET_ImagesApiParams
> = async () => {
  try {
    const images = await prisma.image.findMany();
    return images;
  } catch (error) {
    throw new ApiError({
      code: 400,
      message: "Error when getting images",
      error
    });
  }
};

export const handleGetImages = handleRoute(getImages);
