import { envVar } from "../../utils/envVar";
import { HandlePOSTRequest } from "../../utils/handle.model";
import { InternalServerError } from "../../utils/handleError";
import { handleRoute } from "../../utils/handleRoute";
import { CF_ImageApiUploadResponse } from "./cloudflare.model";

export const postUploadFileToCFImages: HandlePOSTRequest<
  CF_ImageApiUploadResponse
> = async (request) => {
  try {
    const body = await request.formData();
    body.delete("title");

    const cfRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${envVar(
        "CLOUDFLARE_ACCOUNT_ID"
      )}/images/v1`,
      {
        ...request,
        method: "POST",
        headers: {
          Authorization: `Bearer ${envVar("CLOUDFLARE_IMAGE_API_TOKEN")}`
        },
        body
      }
    );
    const cfResponse = await cfRes.json<CF_ImageApiUploadResponse>();
    return cfResponse;
  } catch (error) {
    throw new InternalServerError(
      "Error when uploading an image to cloudflare"
    );
  }
};

export const handlePostUploadFileToCFImages = handleRoute(
  postUploadFileToCFImages
);
