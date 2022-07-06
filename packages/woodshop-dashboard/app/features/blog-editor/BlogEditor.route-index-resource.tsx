import { redirect } from "@remix-run/cloudflare";
import type { RemixFeatureResourceRoute } from "~/types/routes.types";

export const BlogEditorRouteIndexResource: RemixFeatureResourceRoute = {
  // this route cannot be GET-ed (sp)
  loader: () => redirect("/blog"),
};
