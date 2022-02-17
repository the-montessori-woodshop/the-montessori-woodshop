import "./Dialog.scss";

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

import { DialogBackground } from "./DialogBackground";

const dialogId = "dialog-portal";

export type DialogRef = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};
export type DialogProps = { initIsOpen?: boolean; children: ReactNode };

type DialogContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  close: () => void;
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

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.body?.classList.add("dialog-disable");
      document.addEventListener("keydown", handleEscape, false);
    } else {
      document.body?.classList.remove("dialog-disable");
    }

    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [isOpen]);

  if (!dialogContainerRef.current) {
    return null;
  }

  return ReactDOM.createPortal(
    <DialogContext.Provider value={{ isOpen, setIsOpen, close }}>
      <DialogBackground />
      {children}
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
