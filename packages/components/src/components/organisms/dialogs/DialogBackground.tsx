import { css } from "@linaria/core";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC } from "react";

import { DialogContextType } from "./Dialog";

export type DialogBackgroundProps = Pick<DialogContextType, "isOpen" | "close">;

const CSSDialogBackground = css`
  &.active {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10000;
    background: rgba(#5f5a5a, 0.77);
  }
`;

export const DialogBackground: FC<DialogBackgroundProps> = ({
  isOpen,
  close
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={close}
          className={clsx(CSSDialogBackground, {
            active: isOpen
          })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </AnimatePresence>
  );
};
