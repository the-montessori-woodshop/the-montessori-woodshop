import { WizardProvider } from "~/components/wizard";
import type { FC } from "react";

import { CheckoutProvider } from "./Checkout.context";
import type { CheckoutWizardSteps } from "./checkout.utils";

export const CheckoutWizard: FC = ({ children }) => {
  return (
    <WizardProvider<CheckoutWizardSteps>
      initialStep={{
        direction: "forward",
        stepName: "address",
      }}
    >
      <CheckoutProvider>{children}</CheckoutProvider>
    </WizardProvider>
  );
};
