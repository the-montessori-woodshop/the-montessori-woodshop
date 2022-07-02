import { prisma } from "../../utils/getPrisma";
import { HandleGETRequest } from "../../utils/handle.model";
import { NotFoundError } from "../../utils/handleError";
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
    throw new NotFoundError("Error when getting images");
  }
};

export const handleGetImages = handleRoute(getImages);
