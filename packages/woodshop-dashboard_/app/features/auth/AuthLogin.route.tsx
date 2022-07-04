import { Form } from "@remix-run/react/dist";
import {
  Button,
  ButtonGroup,
  TypographyCopy,
  TypographyHeading,
} from "@woodshop/components";
import type { RemixFeatureUIRoute } from "~/types/routes.types";

import { authenticator, setAuth0Strategy } from "./auth.server";

export const LoginRoute: RemixFeatureUIRoute = () => {
  return (
    <div className="bg">
      <div className="card">
        <img
          src="https://imagedelivery.net/2IBxNTNwVZBsFPqW0HdTRQ/078e5b66-3ad2-4c25-e68a-ea2246042300/public"
          alt="woodshop-logo"
          height={128}
          width={128}
        />
        <TypographyHeading cxVariant="h2" cxNode="h1">
          Dashboard Login
        </TypographyHeading>
        <TypographyCopy>
          Use the button below to log into The Montessori Woodshop
          administrative dashboard.
        </TypographyCopy>
        <br />
        <br />
        <br />
        <Form action="/sign-in" method="post">
          <ButtonGroup cxLayout="inline-fill">
            <Button cxVariant="contained" cxColor="primary">
              Login
            </Button>
          </ButtonGroup>
        </Form>
      </div>
    </div>
  );
};

export default LoginRoute;

/**
 * Loads the Auth0 Strategy when the user navigates to the login page
 * 1. Grabs and sets the environment variables from the context into the strategy
 * 2. Set's the authenticator to use the auth0 strategy
 * 3. Check's to see if the user is authenticated or not
 */
LoginRoute.loader = async ({ request, context }) => {
  const auth0Strategy = setAuth0Strategy(context);
  authenticator.use(auth0Strategy);
  return authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
};
