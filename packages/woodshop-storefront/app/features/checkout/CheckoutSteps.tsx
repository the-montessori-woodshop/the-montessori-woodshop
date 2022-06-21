import { WizardBodyMotion, WizardProvider } from "~/components/wizard";
import type { FC } from "react";

import { useCheckoutWizardContext } from "./checkout.useCheckoutWizardContex";
import type { CheckoutWizardSteps } from "./checkout.utils";
import { CheckoutStepAddress } from "./CheckoutStepAddress";
import { CheckoutStepPayment } from "./CheckoutStepPayment";
import { CheckoutStepReview } from "./CheckoutStepReview";
import { CheckoutStepShipping } from "./CheckoutStepShipping";

const CheckoutStepMap: { [key in CheckoutWizardSteps]: React.FC } = {
  address: CheckoutStepAddress,
  payment: CheckoutStepPayment,
  review: CheckoutStepReview,
  shipping: CheckoutStepShipping,
};

export const CheckoutSteps: FC = () => {
  const { currentStep } = useCheckoutWizardContext();
  const Component = CheckoutStepMap[currentStep.stepName];

  return (
    <WizardBodyMotion>
      <Component />
    </WizardBodyMotion>
  );
};
