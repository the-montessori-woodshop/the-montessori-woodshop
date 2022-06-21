import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  Icon,
  MediaQuery,
  TypographyCopy,
  makeRem,
  useDialogRef,
} from "@woodshop/components";
import { ShoppingCart } from "@woodshop/icons";
import { PageLayoutPaneHeaderTitle } from "~/components/page-layout";
import type { FC } from "react";
import styled from "styled-components";

import { SummaryHeader } from "../summary";

const SButton = styled(Button)`
  display: flex;
  justify-content: "flex-end";
`;

export const CheckoutSummaryDrawer: FC = () => {
  const { dialogRef, handleOpen } = useDialogRef();

  return (
    <>
      <MediaQuery atOrLessThan="tablet">
        <SButton onClick={handleOpen}>
          <Icon cxTitle="view-shopping-bag" cxSize={16}>
            <ShoppingCart />
          </Icon>
          <TypographyCopy
            cxVariant="caption"
            style={{
              fontWeight: "initial",
              marginRight: makeRem(8),
              marginLeft: makeRem(8),
              fontSize: makeRem(12),
            }}
          >
            Show order summary
          </TypographyCopy>
        </SButton>
      </MediaQuery>
      <Drawer ref={dialogRef} openWidth={520}>
        <DrawerHeader title="Summary" />
        <DrawerBody>test</DrawerBody>
      </Drawer>
    </>
  );
};
