export type CF_ImageApiUploadResponse = {
  result: {
    id: string;
    filename: string;
    uploaded: string;
    requireSignedURLs: boolean;
    variants: string[];
  };
  result_info: null;
  success: boolean;
  errors: string[];
  messages: string[];
};

export type CF_GetImageUploadUrlResponse = {
  result: {
    id: string;
    uploadURL: string;
  };
  result_info: null;
  success: boolean;
  errors: [];
  messages: [];
};

const CF_ACCOUNT_ID = "68fa4421d84bfcddbd9311a7d57aa419";
const CF_IMAGE_API_TOKEN = "LDQmG3OPnuf8e7XRhvp3OJFC49-0L1klY4WPJ0sn";

export const getCFImagesUploadUrl =
  async (): Promise<CF_GetImageUploadUrlResponse> => {
    try {
      const res = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/images/v2/direct_upload`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${CF_IMAGE_API_TOKEN}`,
          },
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

/**
 * Simple promise to upload images to cloudflare images.
 * This needs to be broken out of the API since workers doesn't support
 * multipart/form-data
 * https://community.cloudflare.com/t/cannot-seem-to-send-multipart-form-data/163491
 */
export const uploadFileToCloudflareImages = async (
  formData: FormData,
  headers: Headers
): Promise<CF_ImageApiUploadResponse> => {
  try {
    const cfRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/images/v1`,
      {
        method: "POST",
        keepalive: true,
        headers: {
          ...headers,
          Authorization: `Bearer ${CF_IMAGE_API_TOKEN}`,
        },
        body: formData,
      }
    );
    const cfText = await cfRes.text();
    console.log(cfText);
    // const cfJson = await cfRes.json<CF_ImageApiUploadResponse>();
    // return cfText;
  } catch (error) {
    throw new Error("Error when uploading to cloudflare images:" + error);
  }
};
