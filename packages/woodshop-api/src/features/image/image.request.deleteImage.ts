import { prisma } from "../../utils/getPrisma";
import { HandleDELETERequest } from "../../utils/handle.model";
import {
  InternalServerError,
  MissingParamError
} from "../../utils/handleError";
import { handleRoute } from "../../utils/handleRoute";
import { DELETE_ImageApiParams, DELETE_ImageApiResponse } from "./image.model";

export const deleteImage: HandleDELETERequest<
  DELETE_ImageApiResponse,
  DELETE_ImageApiParams
> = async (request) => {
  if (!request.params.id) throw new MissingParamError("id");

  try {
    await prisma.image.delete({
      where: {
        id: Number(request.params.id)
      }
    });
    return {
      message: "Successfully deleted"
    };
  } catch (error) {
    throw new InternalServerError("Error when deleting image");
  }
};

export const handleDeleteImage = handleRoute(deleteImage, 201);
