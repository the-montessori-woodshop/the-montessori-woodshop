import { Router } from "itty-router";

import { handleGetPostById } from "./post.getPostById";
import { handleGetPosts } from "./post.getPosts";
import { handlePostNewPost } from "./post.postNewPost";

export const PostRouter = Router({ base: "/api/post" });

PostRouter
  // Post
  .get("/", handleGetPosts)
  .post("/", handlePostNewPost)
  .get("/:id", handleGetPostById);
