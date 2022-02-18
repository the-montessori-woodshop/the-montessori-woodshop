import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  Icon,
  NavbarAction,
  TypographyCopy,
  TypographyHeading,
  useDialogRef,
} from "@woodshop/components";
import { UserCircle } from "@woodshop/icons";
import React, { FC, useCallback } from "react";
import { useNavigate } from "remix";

export const HeaderAccount: FC = () => {
  const { dialogRef, handleOpen, handleClose } = useDialogRef();
  const navigate = useNavigate();

  const goToAuth = useCallback(() => {
    // logic if the user has been signed in or not
    navigate("/auth/sign-in");
    handleClose();
  }, []);

  return (
    <>
      <NavbarAction onClick={handleOpen}>
        <Icon cxTitle="account">
          <UserCircle />
        </Icon>
      </NavbarAction>
      <Drawer ref={dialogRef} openWidth={520}>
        <DrawerHeader>
          <TypographyHeading cxVariant="h2" cxNode="h2">
            Account
          </TypographyHeading>
        </DrawerHeader>
        <DrawerBody>
          <TypographyCopy>
            Please sign in to view the options associated with your account.
          </TypographyCopy>
          <br />
          <Button cxVariant="contained" cxColor="primary" onClick={goToAuth}>
            Sign in
          </Button>
        </DrawerBody>
      </Drawer>
    </>
  );
};
