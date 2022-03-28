import { Router } from "itty-router";

import { handleCreateOrUpdateUser } from "./user.request.postCreateOrUpdateUser";

// import { handleGetPostById } from "./post.getPostById";
// import { handleGetPosts } from "./post.getPosts";
// import { handlePostNewPost } from "./post.postNewPost";

export const UserRouter = Router({ base: "/api/user" });

UserRouter
  // User
  // .get("/", handleGetPosts)
  // .post("/", handlePostNewPost)
  // .get("/:id", handleGetPostById)
  .post("/upsert", handleCreateOrUpdateUser);
