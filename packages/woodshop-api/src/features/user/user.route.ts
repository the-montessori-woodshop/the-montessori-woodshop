import { Router } from "itty-router";

import { authenticate } from "../../middleware/middleware.authenticate";
import { handleGetUsers } from "./user.request.getUsers";
import { handleCreateOrUpdateUser } from "./user.request.postCreateOrUpdateUser";

export const UserRouter = Router({ base: "/user" });

UserRouter
  // User
  .get("*", authenticate, handleGetUsers)
  .post("*", authenticate)
  // .get("/", handleGetPosts)
  // .post("/", handlePostNewPost)
  // .get("/:id", handleGetPostById)
  .POST("/upsert", handleCreateOrUpdateUser);
