import { Router } from "itty-router";

import { authenticate } from "../../middleware/middleware.authenticate";
import { handleCreateOrUpdateUser } from "./user.request.postCreateOrUpdateUser";

// import { handleGetPostById } from "./post.getPostById";
// import { handleGetPosts } from "./post.getPosts";
// import { handlePostNewPost } from "./post.postNewPost";

export const UserRouter = Router({ base: "/user" });

UserRouter
  // User
  .get("*", authenticate)
  .post("*", authenticate)
  // .get("/", handleGetPosts)
  // .post("/", handlePostNewPost)
  // .get("/:id", handleGetPostById)
  .POST("/upsert", handleCreateOrUpdateUser);
