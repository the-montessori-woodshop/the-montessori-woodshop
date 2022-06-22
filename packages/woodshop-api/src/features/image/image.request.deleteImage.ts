import { HandleDELETERequest } from "../../types/index";
import { ApiError } from "../../utils/error.api";
import { prisma } from "../../utils/getPrisma";
import { handleRoute } from "../../utils/handleRoute";
import { DELETE_ImageApiParams, DELETE_ImageApiResponse } from "./image.model";

export const deleteImage: HandleDELETERequest<
  DELETE_ImageApiResponse,
  DELETE_ImageApiParams
> = async (request) => {
  if (!request.params.id) throw new Error(":id is required.");

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
    throw new ApiError("Error when deleting image", error);
  }
};

export const handleDeleteImage = handleRoute(deleteImage);
