import {
  Box,
  Button,
  ButtonGroup,
  FormFieldCheckbox,
  FormFieldEmail,
  FormFieldGroup,
  FormFieldPassword,
  TypographyCopy,
  TypographyHeading,
} from "@woodshop/components";
import { SignInWithApple } from "~/components/SignInWithApple";
import { SignInWithFacebook } from "~/components/SignInWithFacebook";
import { SignInWithGoogle } from "~/components/SignInWithGoogle";
import { getPageTitle } from "~/utils/getPageTitle";
import type { MetaFunction } from "remix";
import { Link } from "remix";

export const meta: MetaFunction = () => {
  return { title: getPageTitle("Sign in") };
};

export default function AuthSignIn() {
  return (
    <>
      <TypographyHeading cxVariant="h1" cxNode="h2">
        Login
      </TypographyHeading>
      <Box
        cxTitle="Use these common providers"
        style={{
          maxWidth: "500px",
        }}
      >
        <ButtonGroup cxLayout="inline-fill">
          <SignInWithApple />
          <SignInWithGoogle />
          <SignInWithFacebook />
        </ButtonGroup>
      </Box>
      <Box
        cxTitle="Use your email address"
        style={{
          maxWidth: "500px",
        }}
      >
        <FormFieldGroup>
          <FormFieldEmail id="email-address" placeholder="Email address" />
          <FormFieldPassword id="password" placeholder="Password" />
          <FormFieldGroup cxLayout="inline-fill">
            <FormFieldCheckbox id="stay-signed-in" label="Keep me signed in?" />
            <div style={{ textAlign: "right" }}>
              <Link to="/auth/forgot-password">
                <TypographyCopy>Forgot your password?</TypographyCopy>
              </Link>
            </div>
          </FormFieldGroup>
          <FormFieldGroup>
            <ButtonGroup cxLayout="inline-fill">
              <Button cxVariant="contained" cxColor="primary">
                Continue
              </Button>
            </ButtonGroup>
          </FormFieldGroup>
        </FormFieldGroup>
        <br />
        <br />
        <br />
        <TypographyCopy>
          Don't have an account?{" "}
          <Link to="/auth/sign-up">
            <strong>Sign up here</strong>
          </Link>
        </TypographyCopy>
      </Box>
    </>
  );
}
