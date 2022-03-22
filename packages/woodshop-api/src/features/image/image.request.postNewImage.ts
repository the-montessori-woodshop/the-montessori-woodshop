import { Post, PrismaClient } from "@prisma/client";

import { HandlePOSTRequest } from "../../types/index";
import { handleRoute } from "../../utils/handleRoute";
import { postUploadFileToCFImages } from "../cloudflare/cloudflare.request.postUploadFileToCFImages";
import { POST_NewImageApiResponse } from "./image.model";

export const postNewImage: HandlePOSTRequest<POST_NewImageApiResponse> = async (
  request
) => {
  try {
    const cfImagesResponse = await postUploadFileToCFImages(request.clone());

    const body = await request.formData();
    const imgTitle = body.get("title") as string | null;
    if (!imgTitle) {
      throw new Error("An image title is required");
    }

    const prisma = new PrismaClient({
      errorFormat: "pretty"
    });
    await prisma.$connect();
    const image = await prisma.image.create({
      data: {
        service_id: cfImagesResponse.result.id,
        title: imgTitle,
        url: cfImagesResponse.result.variants[0]
      }
    });
    return image;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const handlePostNewImage = handleRoute(postNewImage);
