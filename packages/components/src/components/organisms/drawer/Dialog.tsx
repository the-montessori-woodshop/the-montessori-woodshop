import "./Dialog.scss";

import { AnimatePresence, motion } from "framer-motion";
import React, {
  ReactNode,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import ReactDOM from "react-dom";

import { makeClass } from "../../../theme";

const dialogId = "dialog-portal";

export type DialogRef = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};
export type DialogProps = { initIsOpen?: boolean; children: ReactNode };

type DialogContextType = {
  isOpen: boolean;
};

const DialogContext = React.createContext<DialogContextType | null>(null);

export const Dialog = forwardRef<DialogRef, DialogProps>(function Dialog(
  { initIsOpen = false, children },
  ref
) {
  const [isOpen, setIsOpen] = useState(initIsOpen);
  const dialogContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    dialogContainerRef.current = document.getElementById(dialogId);

    if (!dialogContainerRef.current) {
      const container = document.createElement("div");
      container.id = dialogId;
      container.style.position = "fixed";
      container.style.width = "100%";
      container.style.right = "0";
      container.style.left = "0";
      container.style.zIndex = "100000";
      document.body.appendChild(container);
      dialogContainerRef.current = container;
    }

    return () => {
      if (dialogContainerRef.current) {
        document.body.removeChild(dialogContainerRef.current);
        dialogContainerRef.current = null;
      }
    };
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((s) => !s)
    }),
    []
  );

  useEffect(() => {
    if (isOpen) {
      document.body?.classList.add("dialog-disable");
    } else {
      document.body?.classList.remove("dialog-disable");
    }
  }, [isOpen]);

  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  if (!dialogContainerRef.current) {
    return null;
  }

  return ReactDOM.createPortal(
    <DialogContext.Provider value={{ isOpen }}>
      <AnimatePresence>
        <motion.div
          key="background"
          className={makeClass(undefined, "Vmhmek", {
            active: isOpen
          })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
        {children}
      </AnimatePresence>
    </DialogContext.Provider>,
    dialogContainerRef.current
  );
});

export const useDialogContext = (): DialogContextType => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error(
      "'useDialogContext()' must be used within a <SampleProvider /> component"
    );
  }
  return context;
};
