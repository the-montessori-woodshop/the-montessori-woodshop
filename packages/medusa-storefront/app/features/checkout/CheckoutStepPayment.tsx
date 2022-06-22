import {
  Box,
  BoxContent,
  BoxHeader,
  FormFieldGroup,
  FormFieldText,
} from "@woodshop/components";
import type { FC } from "react";

import { useCheckoutWizardContext } from "./checkout.useCheckoutWizardContex";
import { CheckoutNextButton } from "./CheckoutNextButton";
import { CheckoutOverview } from "./CheckoutOverview";
import { CheckoutStepActions } from "./CheckoutStepActions";
import { CheckoutStepWrapper } from "./CheckoutStepWrapper";

const NextButton = () => {
  const { goToStep } = useCheckoutWizardContext();

  return (
    <CheckoutNextButton
      onClick={goToStep({
        direction: "forward",
        stepName: "review",
      })}
    >
      Review your order
    </CheckoutNextButton>
  );
};

export const CheckoutStepPayment: FC = () => {
  return (
    <CheckoutStepWrapper>
      <CheckoutOverview />
      <Box>
        <BoxHeader cxTitle="Express payment" />
        <BoxContent cxVariant="line-separated">express payment</BoxContent>
      </Box>
      <Box>
        <BoxHeader
          cxTitle="Credit card"
          cxSubtitle="All major credit cards accepted; Amex, Visa, Mastercard, Discover"
        />
        <BoxContent cxVariant="line-separated">
          <FormFieldGroup>
            <FormFieldText
              id="name-on-card"
              placeholder="Name on card (as it appears)"
            />
            <FormFieldText
              id="credit-card-number"
              placeholder="Credit card number"
            />
            <FormFieldGroup cxLayout="inline-fill">
              <FormFieldText id="cvv" placeholder="CVV" />
              <FormFieldText id="expiration" placeholder="Expiration (MM/YY)" />
            </FormFieldGroup>
          </FormFieldGroup>
        </BoxContent>
      </Box>
      <CheckoutStepActions>
        <NextButton />
      </CheckoutStepActions>
    </CheckoutStepWrapper>
  );
};
