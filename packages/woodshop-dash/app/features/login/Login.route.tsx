import { Form } from "@remix-run/react";
import {
  Button,
  ButtonGroup,
  TypographyCopy,
  TypographyHeading,
} from "@woodshop/components";
import { authenticator } from "~/services/auth.server";

import type { RemixFeatureRoute } from "../_routes/routes.types";

export const LoginRoute: RemixFeatureRoute = () => {
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
        <Form action="/auth/auth0" method="post">
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

LoginRoute.loader = async ({ request }) =>
  authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });