import {
  Button,
  ButtonGroup,
  TypographyCopy,
  TypographyHeading,
} from "@woodshop/components";
import { Form, LinksFunction } from "remix";

import stylesUrl from "../styles/login.route.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Login() {
  return (
    <div className="bg">
      <div className="card">
        <img
          src="/logo-512x512-transparent.png"
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
}
