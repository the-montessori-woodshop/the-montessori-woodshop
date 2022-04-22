import { LoginRoute } from "~/features/login";
import { authenticator } from "~/services/auth.server";
import type { LoaderFunction } from "remix";

export const links = LoginRoute.links;

export const loader: LoaderFunction = async ({ request }) =>
  authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });

export default LoginRoute;
