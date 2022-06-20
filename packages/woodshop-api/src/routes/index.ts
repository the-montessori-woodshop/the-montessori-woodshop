import { Router } from "itty-router";

import { ImageRouter } from "../features/image/image.route";
import { PostRouter } from "../features/post/post.route";
import { UserRouter } from "../features/user/user.route";
import { handleError } from "../utils/handleError";

const router = Router({ base: "/api" });

router
  // Router
  .all("/post/*", PostRouter.handle)
  .all("/image/*", ImageRouter.handle)
  .all("/user/*", UserRouter.handle)
  .get("*", () => new Response("Not found", { status: 404 }));

export const handleRequest = (request: FetchEvent["request"]) =>
  router.handle(request).catch(handleError);
