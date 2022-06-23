import { Router } from "itty-router";

import { ImageRouter } from "./features/image/image.route";
import { PostRouter } from "./features/post/post.route";
import { UserRouter } from "./features/user/user.route";
import { handleError } from "./utils/handleError";

const router = Router({ base: "/api" });

router
  // Router
  .all("/post/*", PostRouter.handle)
  .all("/image/*", ImageRouter.handle)
  .all("/user/*", UserRouter.handle)
  .get("*", () => new Response("Not found", { status: 404 }));

/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  // MY_BUCKET: R2Bucket;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    return router.handle(request).catch(handleError);
  }
};
