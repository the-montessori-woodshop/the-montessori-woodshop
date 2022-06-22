import { TypographyHeading, makeRem } from "@woodshop/components";
import type { FC } from "react";
import styled from "styled-components";

import { CheckoutBreadcrumbs } from "./CheckoutBreadcrumbs";

const SDiv = styled.div`
  margin-bottom: ${makeRem(16)};
`;
export const CheckoutWizardHeader: FC = () => {
  return (
    <SDiv>
      <TypographyHeading cxVariant="h3" cxNode="h2">
        Checkout
      </TypographyHeading>
      <CheckoutBreadcrumbs />
    </SDiv>
  );
};
