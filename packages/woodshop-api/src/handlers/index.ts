import { Router } from "itty-router";

import handleGETLog from "./log/handleGETLog";

// import Posts from ".log/posts";

const router = Router();

router
  .get("/api/log", handleGETLog)
  // .get("/api/posts", handleGETPosts)
  // .get("/api/posts/:id", handleGetPostById)
  .get("*", () => new Response("Not found", { status: 404 }));

export const handleRequest = (request: FetchEvent["request"]) =>
  router.handle(request);
