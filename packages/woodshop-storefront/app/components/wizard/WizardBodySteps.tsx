import { AnimatePresence, motion } from "framer-motion";
import type { FC } from "react";
import styled from "styled-components";

import { useWizardContext } from "./wizard.context";
import {
  wizardAnimationVariants,
  wizardTransitionValues,
} from "./wizard.utils";

const StyledMotion = styled(motion.div)`
  height: 100%;
  min-width: 100%;
  position: absolute;
  display: inline-block;
  box-sizing: border-box;
`;

/**
 * This component acts as a fully controlled wizard where
 * each step is defined up front. This is helpful for canned
 * steps where the entirety of each step changes each time
 * and each step is contained within the box
 */
export const WizardBodySteps: FC = () => {
  const {
    currentStep: { stepName, direction },
    stepMap,
  } = useWizardContext<"">();

  if (!stepMap) {
    throw new Error(
      "In order to use this component, you need to define the `stepMap` prop in the WizardProvider."
    );
  }

  const Component = stepMap[stepName];

  return (
    <AnimatePresence initial={false} custom={direction}>
      <StyledMotion
        key={stepName}
        id={stepName}
        variants={wizardAnimationVariants}
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        transition={wizardTransitionValues}
      >
        <Component />
      </StyledMotion>
    </AnimatePresence>
  );
};
