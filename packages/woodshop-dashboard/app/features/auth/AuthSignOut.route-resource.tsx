import type { RemixFeatureResourceRoute } from "~/types/routes.types";

import { authenticator } from "./auth.server";

export const AuthSignOut: RemixFeatureResourceRoute = {
  loader: ({ request }) =>
    authenticator.logout(request, { redirectTo: "/login" }),
};
