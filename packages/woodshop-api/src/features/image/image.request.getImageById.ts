import { ApiError } from "../../utils/error.api";
import { prisma } from "../../utils/getPrisma";
import { HandleGETRequest } from "../../utils/handler.model";
import { handleRoute } from "../../utils/handleRoute";
import {
  GET_ImageByIdApiParams,
  GET_ImageByIdApiResponse
} from "./image.model";

export const getImageById: HandleGETRequest<
  GET_ImageByIdApiResponse,
  GET_ImageByIdApiParams
> = async ({ params: { id } }) => {
  if (!id) throw new Error(":id is required.");

  try {
    const image = await prisma.image.findUnique({
      where: {
        id: Number(id)
      }
    });
    return image;
  } catch (error) {
    throw new ApiError("Error when retrieving image", error);
  }
};

export const handleGetImageById = handleRoute(getImageById);
