import { Box } from "@woodshop/components";
import { FC } from "react";

import { CheckoutStepWrapper } from "./CheckoutStepWrapper";

export const CheckoutStepShipping: FC = () => {
  return (
    <CheckoutStepWrapper>
      <Box
        cxTitle="Shipping Info"
        cxSubtitle="The contact and the address to whom we will be shipping your purchase"
      ></Box>

      <Box cxTitle="Shipping method"></Box>
    </CheckoutStepWrapper>
  );
};
