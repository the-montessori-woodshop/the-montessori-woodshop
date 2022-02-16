import {
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import ReactDOM from "react-dom";

const dialogId = "custom-dialog";
type DialogRef = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpen: boolean;
};
export type DialogProps = { initIsOpen?: boolean; children: ReactNode };
export const Dialog = forwardRef<DialogRef, DialogProps>(function Dialog(
  { initIsOpen = false, children },
  ref
) {
  const [isOpen, setIsOpen] = useState(initIsOpen);
  const dialogRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    dialogRef.current = document.getElementById(dialogId);

    if (!dialogRef.current) {
      const container = document.createElement("div");
      container.id = dialogId;
      container.style.position = "fixed";
      container.style.width = "100%";
      container.style.right = "0";
      container.style.left = "0";
      container.style.zIndex = "100000";
      document.body.appendChild(container);
      dialogRef.current = container;
    }

    return () => {
      if (dialogRef.current) {
        document.body.removeChild(dialogRef.current);
        dialogRef.current = null;
      }
    };
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((s) => !s),
      isOpen
    }),
    [isOpen]
  );

  if (!isOpen || !dialogRef.current) {
    return null;
  }
  return ReactDOM.createPortal(children, dialogRef.current);
});

export const useDialogRef = () => {
  const dialogRef = useRef<DialogRef | null>(null);

  const handleOpen = useCallback(() => {
    dialogRef.current?.open();
  }, []);

  const handleClose = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const handleToggle = useCallback(() => {
    dialogRef.current?.toggle();
  }, []);

  return {
    dialogRef,
    open: handleOpen,
    close: handleClose,
    toggle: handleToggle
  };
};
