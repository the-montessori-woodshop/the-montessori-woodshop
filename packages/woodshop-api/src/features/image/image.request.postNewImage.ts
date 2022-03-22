import { Post, PrismaClient } from "@prisma/client";

import { HandlePOSTRequest } from "../../types/index";
import { handleRoute } from "../../utils/handleRoute";
import {
  CF_ImageApiUploadResponse,
  POST_NewImageApiRequest,
  POST_NewImageApiResponse
} from "./image.model";

const CF_ACCOUNT_ID = "68fa4421d84bfcddbd9311a7d57aa419";
const CF_IMAGE_API_TOKEN = "LDQmG3OPnuf8e7XRhvp3OJFC49-0L1klY4WPJ0sn";

export const postNewImage: HandlePOSTRequest<POST_NewImageApiResponse> = async (
  request
) => {
  try {
    const body = await request.formData();
    const imgTitle = body.get("title") as string | null;
    if (!imgTitle) {
      throw new Error("An image title is required");
    }
    body.delete("title");

    const cfRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/images/v1`,
      {
        ...request,
        method: "POST",
        headers: {
          Authorization: `Bearer ${CF_IMAGE_API_TOKEN}`
        },
        body
      }
    );
    const cfResponse = await cfRes.json<CF_ImageApiUploadResponse>();
    const prisma = new PrismaClient({
      errorFormat: "pretty"
    });
    await prisma.$connect();
    const image = await prisma.image.create({
      data: {
        service_id: cfResponse.result.id,
        title: imgTitle,
        url: cfResponse.result.variants[0]
      }
    });
    return image;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const handlePostNewImage = handleRoute(postNewImage);
