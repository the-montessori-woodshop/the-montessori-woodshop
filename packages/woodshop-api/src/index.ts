import { Router } from "itty-router";

import { ImageRouter } from "./features/image/image.route";
import { PostRouter } from "./features/post/post.route";
import { UserRouter } from "./features/user/user.route";
import { NotFoundError, handleError } from "./utils/handleError";

const router = Router();

// Router
router
  .all("/post/*", PostRouter.handle)
  .all("/image/*", ImageRouter.handle)
  .all("/user/*", UserRouter.handle)
  .get("*", () => {
    throw new NotFoundError("Route not found");
  });

addEventListener("fetch", (event) =>
  event.respondWith(
    router
      // success
      .handle(event.request)
      // error
      .catch(handleError)
  )
);
