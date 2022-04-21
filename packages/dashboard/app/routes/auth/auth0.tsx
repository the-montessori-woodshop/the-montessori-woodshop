import { authenticator } from "~/services/auth.server";
import type { ActionFunction, LoaderFunction} from "remix";
import { redirect } from "remix";

export let loader: LoaderFunction = () => redirect("/login");

export let action: ActionFunction = ({ request }) => {
  return authenticator.authenticate("auth0", request);
};
