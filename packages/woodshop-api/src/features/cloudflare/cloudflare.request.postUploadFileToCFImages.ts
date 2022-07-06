import { HandlePOSTRequest } from "../../utils/handle.model";
import {
  InternalServerError,
  PayloadValidationError
} from "../../utils/handleError";
import { handleRoute } from "../../utils/handleRoute";
import { CF_ImageApiUploadResponse } from "./cloudflare.model";

export const postUploadFileToCFImages: HandlePOSTRequest<
  CF_ImageApiUploadResponse
> = async (request) => {
  const body = await request.formData();
  body.delete("title");

  if (!(body.get("file") instanceof File)) {
    throw new PayloadValidationError({
      file: "'file' needs to be a valid File"
    });
  }

  try {
    const cfRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/images/v1`,
      {
        ...request,
        method: "POST",
        headers: {
          Authorization: `Bearer ${CLOUDFLARE_IMAGE_API_TOKEN}`
        },
        body
      }
    );
    const cfResponse = await cfRes.json<CF_ImageApiUploadResponse>();
    return cfResponse;
  } catch (error) {
    // @ts-ignore
    throw new InternalServerError(error.message);
  }
};

export const handlePostUploadFileToCFImages = handleRoute(
  postUploadFileToCFImages
);
