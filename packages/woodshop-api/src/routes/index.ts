import { Router } from "itty-router";

import { PostRouter } from "../features/post/post.route";

const router = Router({ base: "/api" });

const errorHandler = (error: { message: string; status: number }) =>
  new Response(error.message || "Server Error", {
    status: error.status || 500
  });

router
  // Router
  .all("/post/*", PostRouter.handle)
  .get("*", () => new Response("Not found", { status: 404 }));

export const handleRequest = (request: FetchEvent["request"]) =>
  router.handle(request).catch(errorHandler);
