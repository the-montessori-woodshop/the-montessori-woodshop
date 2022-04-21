import { css } from "@linaria/core";
import { AnimatePresence, motion } from "framer-motion";
import { rgba } from "polished";
import React, { FC, ReactNode, forwardRef, memo } from "react";

import { useDevice } from "../../../utils/useDevice";
import { Dialog, DialogRef, useDialogContext } from "./Dialog";

export type DrawerProps = {
  children: ReactNode;
  openWidth?: number;
};
const CSSDrawerContent = css`
  position: fixed;
  top: 0;
  bottom: 0;
  background: var(--color-white);
  box-shadow: -6px 0 8px 5px ${rgba("#5f5a5a", 0.34)};
  display: flex;
  flex-direction: column;
  z-index: 10000;
`;

const DrawerContent: FC<DrawerProps> = ({ children, openWidth = 300 }) => {
  const { isOpen } = useDialogContext();
  const device = useDevice();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={CSSDrawerContent}
          style={{
            width: device === "desktop" ? `${openWidth}px` : "100%"
          }}
          initial={{
            opacity: 0,
            right: device === "desktop" ? `-${openWidth}px` : "-100%"
          }}
          animate={{ opacity: 1, right: 0 }}
          transition={{
            type: "keyframes"
          }}
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
export const DrawerFC = forwardRef<DialogRef, DrawerProps>(function DrawerFC(
  { children, ...props },
  ref
) {
  return (
    <Dialog ref={ref}>
      <DrawerContent {...props}>{children}</DrawerContent>
    </Dialog>
  );
});

export const Drawer = memo(DrawerFC);
