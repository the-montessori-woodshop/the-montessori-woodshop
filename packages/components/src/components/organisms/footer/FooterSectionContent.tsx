import { styled } from "@linaria/react";
import React from "react";
import { forwardRef } from "react";

import { makeRem } from "../../../theme/theme.utils";

export type FooterSectionContentProps = JSX.IntrinsicElements["div"];

const SFooterSectionContent = styled.div`
  margin-top: ${makeRem(20)};
`;

export const FooterSectionContent = forwardRef<
  HTMLDivElement,
  FooterSectionContentProps
>(function FooterSectionContent({ children, ...props }, ref) {
  return (
    <SFooterSectionContent {...props} ref={ref}>
      {children}
    </SFooterSectionContent>
  );
});
