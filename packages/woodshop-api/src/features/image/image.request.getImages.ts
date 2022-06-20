import { Post, PrismaClient } from "@prisma/client";

import { HandleGETRequest } from "../../types/index";
import { ApiError } from "../../utils/error.api";
import { handleRoute } from "../../utils/handleRoute";
import { GET_ImagesApiParams, GET_ImagesApiResponse } from "./image.model";

export const getImages: HandleGETRequest<
  GET_ImagesApiResponse,
  GET_ImagesApiParams
> = async () => {
  const prisma = new PrismaClient({
    errorFormat: "pretty"
  });
  try {
    await prisma.$connect();
    const images = await prisma.image.findMany();
    return images;
  } catch (error) {
    throw new ApiError("Error when get images", error);
  }
};

export const handleGetImages = handleRoute(getImages);
