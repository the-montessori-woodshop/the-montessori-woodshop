import type { LoaderFunction } from "@remix-run/cloudflare";
import { AppRoute } from "~/features/app";
import { authenticator } from "~/services/auth.server";

export const links = AppRoute.links;

export const loader: LoaderFunction = async ({ request }) => {
  return authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

export default AppRoute;
