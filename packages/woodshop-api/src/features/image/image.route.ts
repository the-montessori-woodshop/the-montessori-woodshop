import { Router } from "itty-router";

import { authenticate } from "../../middleware/middleware.authenticate";
import { handleDeleteImage } from "./image.request.deleteImage";
import { handleGetImageById } from "./image.request.getImageById";
import { handleGetImages } from "./image.request.getImages";
import { handlePatchImage } from "./image.request.patchImage";
import { handlePostNewImage } from "./image.request.postNewImage";

export const ImageRouter = Router({ base: "/api/image" });

ImageRouter
  // Auth
  .all("*", authenticate)
  // Images
  .get("/", handleGetImages)
  .post("/", handlePostNewImage)
  .patch("/:id", handlePatchImage)
  .delete("/:id", handleDeleteImage)
  .get("/:id", handleGetImageById);
