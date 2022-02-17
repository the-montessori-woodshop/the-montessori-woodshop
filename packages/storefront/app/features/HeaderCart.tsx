import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  Icon,
  NavbarAction,
  TypographyHeading,
  useDialogRef,
} from "@woodshop/components";
import { ShoppingCart } from "@woodshop/icons";
import { FC, memo } from "react";

export const HeaderCart: FC = memo(function HeaderCart() {
  const { dialogRef, handleClose, handleOpen } = useDialogRef();

  return (
    <NavbarAction onClick={handleOpen}>
      <Icon cxTitle="shopping-cart">
        <ShoppingCart />
      </Icon>
      <Drawer ref={dialogRef} openWidth={520}>
        <DrawerHeader onClose={handleClose}>
          <TypographyHeading cxVariant="h2" cxNode="h2">
            Cart
          </TypographyHeading>
        </DrawerHeader>
        <DrawerBody>this be the body</DrawerBody>
      </Drawer>
    </NavbarAction>
  );
});
