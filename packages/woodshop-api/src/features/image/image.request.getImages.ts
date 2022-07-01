import { ApiError } from "../../utils/error.api";
import { prisma } from "../../utils/getPrisma";
import { HandleGETRequest } from "../../utils/handler.model";
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
    throw new ApiError("Error when get images", error);
  }
};

export const handleGetImages = handleRoute(getImages);
