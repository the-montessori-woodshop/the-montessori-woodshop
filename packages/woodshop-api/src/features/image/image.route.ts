import { Router } from "itty-router";

import { handleDeleteImage } from "./image.request.deleteImage";
import { handleGetImageById } from "./image.request.getImageById";
import { handleGetImages } from "./image.request.getImages";
import { handlePatchImage } from "./image.request.patchImage";
import { handlePostNewImage } from "./image.request.postNewImage";

export const ImageRouter = Router({ base: "/api/image" });

ImageRouter
  // Image
  .get("/", handleGetImages)
  .post("/", handlePostNewImage)
  .get("/:id", handleGetImageById)
  .patch("/:id", handlePatchImage)
  .delete("/:id", handleDeleteImage);
