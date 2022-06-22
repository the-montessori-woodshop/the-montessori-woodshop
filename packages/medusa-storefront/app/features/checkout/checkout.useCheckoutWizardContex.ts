import { useWizardContext } from "~/components/wizard";

import type { CheckoutWizardSteps } from "./checkout.utils";

export const useCheckoutWizardContext = () => {
  const _ = useWizardContext<CheckoutWizardSteps>();
  return _;
};
