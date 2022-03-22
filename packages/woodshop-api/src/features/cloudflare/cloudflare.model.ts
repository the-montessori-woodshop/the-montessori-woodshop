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
