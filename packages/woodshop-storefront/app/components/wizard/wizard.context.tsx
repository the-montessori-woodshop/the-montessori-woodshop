import type { MouseEventHandler, ReactElement } from "react";
import React, { useCallback, useContext, useRef, useState } from "react";

import type { WizardDirection } from "./wizard.utils";

/**
 * We use any here as the default type argument because
 * we don't have any way of passing a type argument
 * to the constant WizardContext... dont try to refactor
 * this... we already tried.
 *
 * Any is the best type that we could provide while
 * still staisfying the TS compiler.
 *
 * When interacting with this context, be sure to use
 * the hook and do not export the WizardContext **constant**
 */
export type WizardContextType<StepNames = any> = {
  currentStep: { stepName: StepNames; direction: WizardDirection };
  /**
   * Use this to attach to a button to go to a step
   * when the button is clicked
   */
  goToStep: (params: {
    stepName: StepNames;
    direction: WizardDirection;
  }) => MouseEventHandler<HTMLButtonElement>;
  /**
   * Use this to programatically go to a specific step
   * This can be used in effects, regular functions, callbacks,
   * etc...
   */
  navigateToStep: (params: {
    stepName: StepNames;
    direction: WizardDirection;
  }) => void;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  stepMap?: { [key in StepNames]: React.FC };
  init: (stepName: StepNames) => void;
  warnBeforeExit: (warning: string) => Promise<boolean>;
  reset: () => void;
};

const WizardContext = React.createContext<WizardContextType | null>(null);

type WizardProviderProps<StepNames extends string> = {
  /**
   * This is a hard coded map that sets specific components
   * to the keys of the steps. This shoudl be used in conjunction
   * with a `<WizardBodySteps />` to change steps.
   */
  stepMap?: { [key in StepNames]: React.FC };
  initialStep: { stepName: StepNames; direction: WizardDirection };
  children: ReactElement;
};

export function WizardProvider<StepNames extends string>({
  children,
  stepMap,
  initialStep,
}: WizardProviderProps<StepNames>): ReactElement {
  const stepMapRef = useRef(stepMap);
  const [currentStep, setCurrentStep] = useState<{
    stepName: StepNames;
    direction: WizardDirection;
  }>(initialStep);

  const reset = useCallback(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);

  const goToStep = useCallback<WizardContextType["goToStep"]>(
    (stepValues) => () => {
      setCurrentStep(stepValues);
    },
    []
  );

  const navigateToStep = useCallback<WizardContextType["navigateToStep"]>(
    (stepValues) => {
      setCurrentStep(stepValues);
    },
    []
  );

  const init = useCallback<WizardContextType["init"]>((stepName) => {
    setCurrentStep({ stepName, direction: "forward" });
  }, []);

  const warnBeforeExit = useCallback<WizardContextType["warnBeforeExit"]>(
    async (warning) => {
      return new Promise<boolean>((resolve) => {
        const response = confirm(warning);
        if (response) {
          reset();
          return resolve(true);
        }
        return false;
      });
    },
    [reset]
  );

  const value = {
    currentStep,
    stepMap: stepMapRef.current,
    goToStep,
    navigateToStep,
    warnBeforeExit,
    reset,
    init,
  };

  return (
    <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
  );
}

export function useWizardContext<T>(): WizardContextType<T> {
  const context = useContext(WizardContext);
  if (!context) {
    throw new Error(
      "'useWizardContext()' must be used within a <SampleProvider /> component"
    );
  }
  return context;
}
