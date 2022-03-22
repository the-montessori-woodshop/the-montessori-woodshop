import { HandlePOSTRequest } from "../../types/index";
import { handleRoute } from "../../utils/handleRoute";
import { CF_ImageApiUploadResponse } from "./cloudflare.model";

const CF_ACCOUNT_ID = "68fa4421d84bfcddbd9311a7d57aa419";
const CF_IMAGE_API_TOKEN = "LDQmG3OPnuf8e7XRhvp3OJFC49-0L1klY4WPJ0sn";

export const postUploadFileToCFImages: HandlePOSTRequest<
  CF_ImageApiUploadResponse
> = async (request) => {
  try {
    const body = await request.formData();
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
    return cfResponse;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const handlePostUploadFileToCFImages = handleRoute(
  postUploadFileToCFImages
);
