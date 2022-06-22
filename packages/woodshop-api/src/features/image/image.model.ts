import { Image } from "@prisma/client/edge";

export type POST_NewImageApiRequest = FormData;
export type POST_NewImageApiResponse = Image;

export type GET_ImagesApiResponse = Image[];
export type GET_ImagesApiParams = Record<string, unknown>;

export type PATCH_ImagesApiRequest = Pick<Image, "title">;
export type PATCH_ImagesApiResponse = Image;
export type PATCH_ImagesApiParams = { id: string };

export type GET_ImageByIdApiResponse = Image | null;
export type GET_ImageByIdApiParams = { id: string };

export type DELETE_ImageApiResponse = { message: "Successfully deleted" };
export type DELETE_ImageApiParams = { id: string };
