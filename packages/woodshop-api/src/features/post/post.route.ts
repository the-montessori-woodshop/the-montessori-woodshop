import { Router } from "itty-router";

import { authenticate } from "../../middleware/middleware.authenticate";
import { handleGetPosts } from "./post.getAllPosts";
import { handleGetPostById } from "./post.getPostById";
import { handlePostNewPost } from "./post.postNewPost";
import { handleUpdatePost } from "./post.request.patchUpdatePost";

export const PostRouter = Router({ base: "/api/post" });

PostRouter
  // Post
  .get("/", handleGetPosts)
  .post("/", authenticate, handlePostNewPost)
  .get("/:id", handleGetPostById)
  .patch("/:id", handleUpdatePost);
