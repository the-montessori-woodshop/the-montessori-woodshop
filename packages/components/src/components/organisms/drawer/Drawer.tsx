import "./Drawer.scss";

import { AnimatePresence, motion } from "framer-motion";
import React, { FC, ReactNode, forwardRef } from "react";

import { makeClass } from "../../../theme";
import { useDevice } from "../../utils/useDevice";
import { Dialog, DialogRef, useDialogContext } from "./Dialog";

export type DrawerProps = {
  children: ReactNode;
  openWidth?: number;
};
const DrawerContent: FC<DrawerProps> = ({ children, openWidth = 300 }) => {
  const { isOpen } = useDialogContext();
  const device = useDevice();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="drawer"
          className={makeClass(undefined, "r3p75np")}
          style={{
            width: device === "desktop" ? `${openWidth}px` : "100%"
          }}
          initial={{
            opacity: 0,
            right: device === "desktop" ? `-${openWidth}px` : "-100%"
          }}
          animate={{ opacity: 1, right: 0 }}
          exit={{
            opacity: 0,
            right: device === "desktop" ? `-${openWidth}px` : "-100%"
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export const Drawer = forwardRef<DialogRef, DrawerProps>(function Drawer(
  { children, ...props },
  ref
) {
  return (
    <Dialog ref={ref}>
      <DrawerContent {...props}>{children}</DrawerContent>
    </Dialog>
  );
});
