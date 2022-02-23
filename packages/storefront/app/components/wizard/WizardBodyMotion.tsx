import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
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
 * Standard component to be used with the wizardContext
 * to be able to easily animate between step transitions
 */
export const WizardBodyMotion: FC = ({ children }) => {
  const {
    currentStep: { stepName, direction },
  } = useWizardContext<"">();

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
        {children}
      </StyledMotion>
    </AnimatePresence>
  );
};
