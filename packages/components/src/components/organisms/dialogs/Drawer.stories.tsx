import React from "react";

import { Button } from "../../atoms/buttons/Button";
import { useDialogRef } from "./dialog.useDialogRef";
import { Drawer } from "./Drawer";
import { DrawerBody } from "./DrawerBody";
import { DrawerHeader } from "./DrawerHeader";

export default {
  title: "Organisms / Dialogs / Drawer"
};

export const Base = () => {
  const { dialogRef, handleOpen } = useDialogRef();

  return (
    <>
      <Button onClick={handleOpen} cxVariant="text" cxColor="primary">
        open drawer
      </Button>

      <Drawer ref={dialogRef} openWidth={500}>
        <DrawerHeader title="Title" />
        <DrawerBody>this be the body</DrawerBody>
      </Drawer>
    </>
  );
};
