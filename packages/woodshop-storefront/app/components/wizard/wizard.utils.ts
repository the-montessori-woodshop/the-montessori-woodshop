import { Transition } from "framer-motion";

export type WizardDirection = "forward" | "back";

export const enterFromTheLeft = "-100%";
export const enterFromTheRight = "100%";
export const exitToTheLeft = "-100%";
export const exitToTheRight = "100%";

export const wizardAnimationVariants = {
  enter: (custom: WizardDirection) => {
    return {
      x: custom === "forward" ? enterFromTheRight : enterFromTheLeft,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (custom: WizardDirection) => {
    return {
      x: custom === "forward" ? exitToTheLeft : exitToTheRight,
      opacity: 0,
    };
  },
};

export const wizardTransitionValues: Transition = {
  type: "spring",
  bounce: 0,
  duration: 0.4,
};
