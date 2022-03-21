import { Router } from "itty-router";

// import { handleGetImageById } from "./post.getPostById";
import { handleGetImages } from "./image.request.getImages";
import { handlePostNewImage } from "./image.request.postNewImage";

export const ImageRouter = Router({ base: "/api/image" });

ImageRouter
  // Image
  .get("/", handleGetImages)
  .post("/", handlePostNewImage);
// .get("/:id", handleGetImageById);
