import "./DialogBackground.scss";

import { AnimatePresence, motion } from "framer-motion";
import React, { FC } from "react";

import { makeClass } from "../../../theme";
import { DialogContextType } from "./Dialog";

export const DialogBackground: FC<
  Pick<DialogContextType, "isOpen" | "close">
> = ({ isOpen, close }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={close}
          className={makeClass(undefined, "Vmhmek", {
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
