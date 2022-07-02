import { prisma } from "../../utils/getPrisma";
import { HandleGETRequest } from "../../utils/handle.model";
import { MissingParamError, NotFoundError } from "../../utils/handleError";
import { handleRoute } from "../../utils/handleRoute";
import {
  GET_ImageByIdApiParams,
  GET_ImageByIdApiResponse
} from "./image.model";

export const getImageById: HandleGETRequest<
  GET_ImageByIdApiResponse,
  GET_ImageByIdApiParams
> = async ({ params: { id } }) => {
  if (!id) throw new MissingParamError("id");

  try {
    const image = await prisma.image.findUnique({
      where: {
        id: Number(id)
      }
    });
    return image;
  } catch (error) {
    throw new NotFoundError("Error when retrieving image");
  }
};

export const handleGetImageById = handleRoute(getImageById);
