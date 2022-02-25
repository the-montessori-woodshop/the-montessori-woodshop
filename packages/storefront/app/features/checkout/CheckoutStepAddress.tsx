import {
  Box,
  Button,
  ButtonGroup,
  FormFieldCheckbox,
  FormFieldEmail,
  FormFieldGroup,
  FormFieldText,
  makeRem,
} from "@woodshop/components";
import { FC } from "react";

import { useCheckoutWizardContext } from "./checkout.useCheckoutWizardContex";
import { CheckoutStepWrapper } from "./CheckoutStepWrapper";

const NextButton = () => {
  const { goToStep } = useCheckoutWizardContext();

  return (
    <Button
      cxVariant="contained"
      cxColor="primary"
      onClick={goToStep({
        direction: "forward",
        stepName: "shipping",
      })}
      style={{
        height: makeRem(60),
      }}
    >
      Continue to shipping
    </Button>
  );
};

export const CheckoutStepAddress: FC = () => {
  return (
    <CheckoutStepWrapper>
      <Box
        cxTitle="Express checkout"
        cxSubtitle="1-click checkout with your favorite services."
      >
        <ButtonGroup cxLayout="inline-fill">
          <Button
            style={{
              background: "black",
            }}
          >
            Apple
          </Button>
          <Button
            style={{
              background: "#FFC43A",
            }}
          >
            PayPal
          </Button>
        </ButtonGroup>
      </Box>
      <Box
        cxTitle="Contact information"
        cxSubtitle="Already have an account? Log in"
      >
        <FormFieldText id="email-address" placeholder="Email address" />
      </Box>
      <Box
        cxTitle="Shipping address"
        cxSubtitle="We do not shop to P.O. Boxes."
      >
        <FormFieldGroup>
          <FormFieldText id="first_name" placeholder="First name" />
          <FormFieldText id="last_name" placeholder="Last name" />
          <FormFieldText id="address" placeholder="Address" />
          <FormFieldText
            id="address_2"
            placeholder="Apartment, suite, etc. (Optional)"
          />
          <FormFieldText id="city" placeholder="City" />
          <FormFieldGroup cxLayout="inline-fill">
            <FormFieldText id="state" placeholder="State" />
            <FormFieldText id="zip" placeholder="ZIP code" />
          </FormFieldGroup>
          <FormFieldText id="phone" placeholder="Phone" />
          <FormFieldCheckbox id="save" label="Save for next time" />
          <FormFieldCheckbox
            id="subscribe"
            label="Subscribe to exclusive savings and deals!"
          />
        </FormFieldGroup>
      </Box>
      <br />
      <br />
      <ButtonGroup cxLayout="inline-fill">
        <NextButton />
      </ButtonGroup>
    </CheckoutStepWrapper>
  );
};
