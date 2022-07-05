import { AnimatePresence, motion } from "framer-motion";
import React, { FC, ReactNode, forwardRef } from "react";

import { Dialog, DialogRef, useDialogContext } from "./Dialog";

export type ModalProps = {
  children: ReactNode;
};
const ModalContent: FC<ModalProps> = ({ children }) => {
  const { isOpen } = useDialogContext();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export const Modal = forwardRef<DialogRef, ModalProps>(function Modal(
  { children },
  ref
) {
  return (
    <Dialog ref={ref}>
      <ModalContent>{children}</ModalContent>
    </Dialog>
  );
});
