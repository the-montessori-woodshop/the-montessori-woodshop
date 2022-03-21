import { Image } from "@prisma/client";

export type POST_NewImageApiRequest = {
  file: File;
  title: string;
};
export type POST_NewImageApiResponse = Image;

export type GET_ImagesApiResponse = Image[];
export type GET_ImagesApiParams = Record<string, unknown>;

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
