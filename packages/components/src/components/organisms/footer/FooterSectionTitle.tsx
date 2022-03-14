import { styled } from "@linaria/react";
import React, { forwardRef } from "react";

import { makeRem } from "../../../theme/theme.utils";
import { TypographyHeading } from "../../atoms/TypographyHeading";

export type FooterSectionTitleProps = JSX.IntrinsicElements["div"];

const SFooterSectionTitle = styled.div`
  position: relative;
  display: block;
  padding-bottom: ${makeRem(4)};
  font-weight: bold;
  color: var(--color-white);

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: ${makeRem(2)};
    width: 20%;
    background-color: var(--color-secondary);
  }
`;

export const FooterSectionTitle = forwardRef<
  HTMLDivElement,
  FooterSectionTitleProps
>(function FooterSectionTitle({ children, ...props }, ref) {
  return (
    <SFooterSectionTitle {...props} ref={ref}>
      <TypographyHeading
        cxVariant="h5"
        cxNode="div"
        color="inherit"
        style={{ marginTop: 0 }}
      >
        {children}
      </TypographyHeading>
    </SFooterSectionTitle>
  );
});
