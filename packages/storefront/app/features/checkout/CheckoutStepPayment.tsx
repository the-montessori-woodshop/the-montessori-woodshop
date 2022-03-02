import { Box, FormFieldGroup, FormFieldText } from "@woodshop/components";
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
      <Box>
        <div>name</div>
        <div>address</div>
        <div>shipping method</div>
      </Box>
      <Box
        cxTitle="Payment Information"
        cxSubtitle="All major credit cards accepted; Amex, Visa, Mastercard, Discover"
      >
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
      </Box>
      <CheckoutStepActions>
        <NextButton />
      </CheckoutStepActions>
    </CheckoutStepWrapper>
  );
};
