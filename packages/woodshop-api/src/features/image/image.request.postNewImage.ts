import { prisma } from "../../utils/getPrisma";
import { HandlePOSTRequest } from "../../utils/handle.model";
import {
  InternalServerError,
  PayloadValidationError
} from "../../utils/handleError";
import { handleRoute } from "../../utils/handleRoute";
import { postUploadFileToCFImages } from "../cloudflare/cloudflare.request.postUploadFileToCFImages";
import { POST_NewImageApiResponse } from "./image.model";

export const postNewImage: HandlePOSTRequest<POST_NewImageApiResponse> = async (
  request
) => {
  const cfImagesResponse = await postUploadFileToCFImages(request.clone());

  const body = await request.formData();
  const imgTitle = body.get("title") as string | null;

  if (!imgTitle) {
    throw new PayloadValidationError({
      imgTitle: "An image title is required"
    });
  }

  try {
    const image = await prisma.image.create({
      data: {
        service_id: cfImagesResponse.result.id,
        title: imgTitle,
        url: cfImagesResponse.result.variants[0]
      }
    });
    return image;
  } catch (error) {
    throw new InternalServerError("Error when trying to add the image", {
      error
    });
  }
};

export const handlePostNewImage = handleRoute(postNewImage);
