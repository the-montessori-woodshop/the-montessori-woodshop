import { useWizardContext } from "~/components/wizard";

import { CheckoutWizardSteps } from "./checkout.utils";

export const useCheckoutWizardContext = () => {
  const _ = useWizardContext<CheckoutWizardSteps>();
  return _;
};
