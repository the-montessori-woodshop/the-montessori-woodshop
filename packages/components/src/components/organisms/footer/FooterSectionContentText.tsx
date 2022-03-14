import { styled } from "@linaria/react";
import React, { forwardRef } from "react";

import { makeRem } from "../../../theme/theme.utils";
import { TypographyCopy } from "../../atoms/TypographyCopy";

export type FooterSectionContentTextProps = JSX.IntrinsicElements["div"];

const SFooterSectionContentText = styled.div`
  color: var(--color-white);

  & + & {
    margin-top: ${makeRem(16)};
  }
`;

export const FooterSectionContentText = forwardRef<
  HTMLDivElement,
  FooterSectionContentTextProps
>(function FooterSectionContentText({ children, ...props }, ref) {
  return (
    <SFooterSectionContentText {...props}>
      <TypographyCopy {...props} cxNode="div" cxVariant="body2" ref={ref}>
        {children}
      </TypographyCopy>
    </SFooterSectionContentText>
  );
});
