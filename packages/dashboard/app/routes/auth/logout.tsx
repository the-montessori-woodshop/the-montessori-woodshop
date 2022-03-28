import { authenticator } from "~/services/auth.server";
import type { LoaderFunction } from "remix";

export let loader: LoaderFunction = ({ request }) => {
  return authenticator.logout(request, { redirectTo: "/login" });
};
