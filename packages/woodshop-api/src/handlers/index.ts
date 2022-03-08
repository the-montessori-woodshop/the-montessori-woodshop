import { Router } from "itty-router";

import { handleGetPostById } from "./posts/handleGETPostById";

const router = Router();

router
  // Posts
  .get("/api/post/:id", handleGetPostById)
  // .post("/api/post", handlePOSTPost)
  // .get("/api/posts", handleGETPosts)
  // .get("/api/posts/:id", handleGetPostById)
  .get("*", () => new Response("Not found", { status: 404 }));

export const handleRequest = (request: FetchEvent["request"]) =>
  router.handle(request);
