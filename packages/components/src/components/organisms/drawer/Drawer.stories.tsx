import React from "react";

import { Button } from "../../atoms/Button";
import { TypographyHeading } from "../../atoms/TypographyHeading";
import { useDialogRef } from "./dialog.useDialogRef";
import { Drawer } from "./Drawer";
import { DrawerBody } from "./DrawerBody";
import { DrawerHeader } from "./DrawerHeader";

export default {
  title: "Organisms / Dialogs / Drawer"
};

export const Base = () => {
  const { dialogRef, handleClose, handleOpen } = useDialogRef();

  return (
    <>
      <Button onClick={handleOpen} cxVariant="text" cxColor="primary">
        open drawer
      </Button>

      <Drawer ref={dialogRef} openWidth={500}>
        <DrawerHeader onClose={handleClose}>
          <TypographyHeading cxVariant="h2" cxNode="h2">
            Title
          </TypographyHeading>
        </DrawerHeader>
        <DrawerBody>this be the body</DrawerBody>
      </Drawer>
    </>
  );
};
