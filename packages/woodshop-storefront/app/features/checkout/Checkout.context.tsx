import type { WizardContextType} from "~/components/wizard";
import { useWizardContext } from "~/components/wizard";
import type { FC} from "react";
import React, { useContext, useMemo } from "react";

import { useCheckoutWizardContext } from "./checkout.useCheckoutWizardContex";
import { CheckoutWizardSteps } from "./checkout.utils";

type CheckoutContextType = WizardContextType & {};

const CheckoutContext = React.createContext<CheckoutContextType | null>(null);

export const CheckoutProvider: FC = ({ children }) => {
  const wizardControls = useCheckoutWizardContext();

  const value = useMemo(
    () => ({
      ...wizardControls,
    }),
    []
  );

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckoutContext = (): CheckoutContextType => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error(
      "'useCheckoutContext()' must be used within a <CheckoutProvider /> component"
    );
  }
  return context;
};
