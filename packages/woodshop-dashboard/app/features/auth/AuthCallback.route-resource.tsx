import type { RemixFeatureResourceRoute } from "../../types/routes.types";
import { authenticator } from "./auth.server";

export const AuthCallbackRoute: RemixFeatureResourceRoute = {
  loader: ({ request }) =>
    authenticator.authenticate("auth0", request, {
      successRedirect: "/",
      failureRedirect: "/login",
    }),
};
