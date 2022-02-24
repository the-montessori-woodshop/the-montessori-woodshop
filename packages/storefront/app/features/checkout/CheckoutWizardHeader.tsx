import { TypographyHeading } from "@woodshop/components";
import { FC } from "react";

import { CheckoutBreadcrumbs } from ".";

export const CheckoutWizardHeader: FC = () => {
  return (
    <>
      <TypographyHeading cxVariant="h3" cxNode="h2">
        Checkout
      </TypographyHeading>
      <CheckoutBreadcrumbs />
    </>
  );
};
