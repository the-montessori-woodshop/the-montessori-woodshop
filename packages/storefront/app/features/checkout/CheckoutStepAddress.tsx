import {
  Box,
  BoxContent,
  BoxHeader,
  Button,
  ButtonGroup,
  FormFieldCheckbox,
  FormFieldGroup,
  FormFieldText,
} from "@woodshop/components";
import { FC } from "react";

import { useCheckoutWizardContext } from "./checkout.useCheckoutWizardContex";
import { CheckoutNextButton } from "./CheckoutNextButton";
import { CheckoutStepActions } from "./CheckoutStepActions";
import { CheckoutStepWrapper } from "./CheckoutStepWrapper";

const NextButton = () => {
  const { goToStep } = useCheckoutWizardContext();

  return (
    <CheckoutNextButton
      onClick={goToStep({
        direction: "forward",
        stepName: "shipping",
      })}
    >
      Continue to shipping
    </CheckoutNextButton>
  );
};

export const CheckoutStepAddress: FC = () => {
  return (
    <CheckoutStepWrapper>
      <Box>
        <BoxHeader
          cxTitle="Express checkout"
          cxSubtitle="1-click checkout with your favorite services."
        />
        <BoxContent>
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
        </BoxContent>
      </Box>
      <Box>
        <BoxHeader
          cxTitle="Contact information"
          cxSubtitle="Already have an account? Log in"
        />
        <BoxContent cxVariant="line-separated">
          <FormFieldText id="email-address" placeholder="Email address" />
        </BoxContent>
      </Box>
      <Box>
        <BoxHeader
          cxTitle="Shipping address"
          cxSubtitle="We do not shop to P.O. Boxes."
        />
        <BoxContent cxVariant="line-separated">
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
        </BoxContent>
      </Box>
      <br />
      <br />
      <CheckoutStepActions>
        <NextButton />
      </CheckoutStepActions>
    </CheckoutStepWrapper>
  );
};
