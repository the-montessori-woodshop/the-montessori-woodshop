import React from "react";

import { Dialog } from "./Dialog";
import { useDialogRef } from "./dialog.useDialogRef";

export default {
  title: "Organisms / Dialogs / Controls"
};

export const Base = () => {
  const { dialogRef, handleOpen, handleClose, handleToggle } = useDialogRef();

  return (
    <>
      <button onClick={handleOpen}>open dialog</button>
      <button onClick={handleClose}>close dialog</button>
      <button onClick={handleToggle}>toggle dialog</button>

      <Dialog ref={dialogRef}>testing...</Dialog>
    </>
  );
};
