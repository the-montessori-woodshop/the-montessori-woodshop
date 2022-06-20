import { HandlePOSTRequest } from "../../types/index";
import { handleRoute } from "../../utils/handleRoute";
import { CF_GetImageUploadUrlResponse } from "./cloudflare.model";

const CF_ACCOUNT_ID = "68fa4421d84bfcddbd9311a7d57aa419";
const CF_IMAGE_API_TOKEN = "LDQmG3OPnuf8e7XRhvp3OJFC49-0L1klY4WPJ0sn";

export const postGetCFDirectUploadUrl: HandlePOSTRequest<
  CF_GetImageUploadUrlResponse
> = async () => {
  try {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/images/v2/direct_upload`,
      {
        method: "post",
        headers: {
          Authorization: `Bearer ${CF_IMAGE_API_TOKEN}`
        }
      }
    );
    const data = await res.json<CF_GetImageUploadUrlResponse>();
    return data;
  } catch (error) {
    throw new Error(
      "Error when getting and upload url for cloudflare images:" + error
    );
  }
};

export const handlePostUploadFileToCFImages = handleRoute(
  postGetCFDirectUploadUrl
);
