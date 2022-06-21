import { Button, Illustration } from "@woodshop/components";
import { UnboxAlert } from "@woodshop/illustrations";
import type { FC } from "react";

import { EmptyState } from "./EmptyState";
import { EmptyStateSubtitle } from "./EmptyStateSubtitle";
import { EmptyStateTitle } from "./EmptyStateTitle";

export const EmptyCart: FC = () => {
  return (
    <EmptyState>
      <Illustration cxTitle="unbox" cxSize={256}>
        <UnboxAlert />
      </Illustration>
      <EmptyStateTitle>Your cart is empty</EmptyStateTitle>
      <EmptyStateSubtitle>
        Looks like you haven't added anything to your cart yet. Click Shop Now
        to view our products!
      </EmptyStateSubtitle>
      <div
        style={{
          margin: "2rem auto 0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button cxVariant="contained" cxColor="primary">
          Shop Now
        </Button>
      </div>
    </EmptyState>
  );
};
