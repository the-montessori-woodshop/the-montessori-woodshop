import {
  Box,
  BoxContent,
  BoxHeader,
  Button,
  FormFieldGroup,
  FormFieldText,
  Icon,
  MediaQuery,
  makeRem,
} from "@woodshop/components";
import { CheckmarkCircle } from "@woodshop/icons";
import type { FC } from "react";

import { CheckoutOverview } from "./CheckoutOverview";
import { CheckoutStepWrapper } from "./CheckoutStepWrapper";

export const CheckoutStepReview: FC = () => {
  return (
    <CheckoutStepWrapper>
      <CheckoutOverview />
      <MediaQuery atOrLessThan="tablet">
        <Box>
          <BoxHeader cxTitle="Coupon code / discount code" />
          <BoxContent cxVariant="line-separated">
            <FormFieldGroup cxLayout="inline-fill">
              <FormFieldText id="coupon-code" placeholder="Coupon code" />
              <Button
                cxVariant="contained"
                cxColor="primary"
                style={{
                  maxWidth: makeRem(44),
                  minWidth: makeRem(44),
                }}
              >
                <Icon cxTitle="process-coupon-code" cxColor="white">
                  <CheckmarkCircle />
                </Icon>
              </Button>
            </FormFieldGroup>
          </BoxContent>
        </Box>
      </MediaQuery>
    </CheckoutStepWrapper>
  );
};
