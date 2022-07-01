import { redirect } from "@remix-run/cloudflare";
import type { RemixFeatureResourceRoute } from "~/types/routes.types";

import { authenticator } from "./auth.server";

export const AuthSignIn: RemixFeatureResourceRoute = {
  loader: () => redirect("/login"),
  action: ({ request }) => authenticator.authenticate("auth0", request),
};
