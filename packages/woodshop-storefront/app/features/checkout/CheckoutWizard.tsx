import { WizardProvider } from "~/components/wizard";
import { FC } from "react";

import { CheckoutProvider } from "./Checkout.context";
import { CheckoutWizardSteps } from "./checkout.utils";

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
