import React from "react";

import { Dialog, useDialogRef } from "./Dialog";

export default {
  title: "Organisms / Dialog"
};

export const Base = () => {
  const { dialogRef, open, close, toggle } = useDialogRef();

  return (
    <>
      <button onClick={open}>open dialog</button>
      <button onClick={close}>close dialog</button>
      <button onClick={toggle}>toggle dialog</button>
      <Dialog ref={dialogRef}>testing...</Dialog>
    </>
  );
};
