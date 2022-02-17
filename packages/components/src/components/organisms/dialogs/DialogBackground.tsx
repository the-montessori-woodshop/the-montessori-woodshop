import { AnimatePresence, motion } from "framer-motion";
import React, { FC } from "react";

import { makeClass } from "../../../theme";
import { useDialogContext } from "./Dialog";

export const DialogBackground: FC = () => {
  const { isOpen, setIsOpen } = useDialogContext();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={() => setIsOpen(false)}
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
