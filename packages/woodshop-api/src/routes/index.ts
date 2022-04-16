import { Router } from "itty-router";

import { ImageRouter } from "../features/image/image.route";
import { PostRouter } from "../features/post/post.route";
import { UserRouter } from "../features/user/user.route";
import { ApiError } from "../utils/error.api";
import { AuthenticationError } from "../utils/error.auth";
import { respondWith } from "../utils/responder";

const router = Router({ base: "/api" });

const errorHandler = (error) => {
  console.log("ERROR HANDLER", error.message, error.status);
  console.log("ERROR!!!");
  console.log(error);
  if (error instanceof ApiError) {
    return respondWith.error({
      error: error.raw as string,
      message: error.message
    });
  }
  if (error instanceof AuthenticationError) {
    return respondWith.unauthorized({
      message: error.message
    });
  }
  return respondWith.error({
    // @ts-ignore
    error: error.message,
    message: "Unhandled error."
  });
};

router
  // Router
  .all("/post/*", PostRouter.handle)
  .all("/image/*", ImageRouter.handle)
  .all("/user/*", UserRouter.handle)
  .get("*", () => new Response("Not found", { status: 404 }));

export const handleRequest = (request: FetchEvent["request"]) =>
  router.handle(request).catch(errorHandler);
