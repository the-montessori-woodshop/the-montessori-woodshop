import { Router } from "itty-router";

import { authenticate } from "../../middleware/middleware.authenticate";
import { handleGetPosts } from "./post.request.getAllPosts";
import { handleGetPostById } from "./post.request.getPostById";
import { handleUpdatePost } from "./post.request.patchUpdatePost";
import { handlePostNewPost } from "./post.request.postNewPost";

export const PostRouter = Router({ base: "/post" });

PostRouter
  // Post
  .get("/", handleGetPosts)
  .post("/", authenticate, handlePostNewPost)
  .get("/:id", handleGetPostById)
  .patch("/:id", authenticate, handleUpdatePost);
