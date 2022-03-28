import { authenticator } from "~/services/auth.server";
import { ActionFunction, LoaderFunction, redirect } from "remix";

export let loader: LoaderFunction = () => redirect("/login");

export let action: ActionFunction = ({ request }) => {
  return authenticator.authenticate("auth0", request);
};
