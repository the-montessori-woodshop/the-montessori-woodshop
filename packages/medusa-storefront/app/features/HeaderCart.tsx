import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  Icon,
  NavbarAction,
  useDialogRef,
} from "@woodshop/components";
import { ShoppingCart } from "@woodshop/icons";
import { EmptyCart } from "~/components/EmptyCart";
import type { FC} from "react";
import { memo } from "react";

export const HeaderCart: FC = memo(function HeaderCart() {
  const { dialogRef, handleOpen } = useDialogRef();

  return (
    <>
      <NavbarAction onClick={handleOpen}>
        <Icon cxTitle="shopping-cart">
          <ShoppingCart />
        </Icon>
      </NavbarAction>
      <Drawer ref={dialogRef} openWidth={520}>
        <DrawerHeader title="Cart" />
        <DrawerBody>
          <EmptyCart />
        </DrawerBody>
      </Drawer>
    </>
  );
});
