import { Box } from "@woodshop/components";
import { FC } from "react";

import { CheckoutStepWrapper } from "./CheckoutStepWrapper";

export const CheckoutStepReview: FC = () => {
  return (
    <CheckoutStepWrapper>
      <Box>
        <div>name</div>
        <div>address</div>
        <div>shipping method</div>
        <div>payment method</div>
      </Box>
    </CheckoutStepWrapper>
  );
};
