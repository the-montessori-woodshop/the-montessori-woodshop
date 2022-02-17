import { MutableRefObject, useCallback, useRef } from "react";

import { DialogRef } from "./Dialog";

export type DialogControlProps = {
  handleOpen: () => void;
  handleClose: () => void;
  handleToggle: () => void;
};
export type DialogControlRef = {
  dialogRef: MutableRefObject<DialogRef | null>;
};
export type DialogControls = DialogControlRef & DialogControlProps;
export const useDialogRef = (): DialogControls => {
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
    handleOpen,
    handleClose,
    handleToggle
  };
};
