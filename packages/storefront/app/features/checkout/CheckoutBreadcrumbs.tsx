import { TypographyCopy } from "@woodshop/components";
import { FC } from "react";

export const CheckoutBreadcrumbs: FC = () => {
  return (
    <div>
      <TypographyCopy cxVariant="body2" cxColor="textPrimary" cxNode="span">
        <strong>Address</strong>
      </TypographyCopy>
      <TypographyCopy cxVariant="body2" cxColor="textSecondary" cxNode="span">
        &nbsp;&nbsp;&gt;&nbsp;&nbsp;
      </TypographyCopy>
      <TypographyCopy cxVariant="body2" cxColor="textSecondary" cxNode="span">
        Payment
      </TypographyCopy>
      <TypographyCopy cxVariant="body2" cxColor="textSecondary" cxNode="span">
        &nbsp; &nbsp;&gt;&nbsp;&nbsp;
      </TypographyCopy>
      <TypographyCopy cxVariant="body2" cxColor="textSecondary" cxNode="span">
        Shipping
      </TypographyCopy>
      <TypographyCopy cxVariant="body2" cxColor="textSecondary" cxNode="span">
        &nbsp;&nbsp;&gt;&nbsp;&nbsp;
      </TypographyCopy>
      <TypographyCopy cxVariant="body2" cxColor="textSecondary" cxNode="span">
        Review
      </TypographyCopy>
    </div>
  );
};
