import { styled } from "@linaria/react";
import React, { forwardRef } from "react";

import { TypographyHeading } from "../../atoms/typography/TypographyHeading";

export type PageSectionPaneTitleProps = JSX.IntrinsicElements["div"];

const SPageSectionPaneTitle = styled.div`
  text-align: inherit;

  & > h2 {
    text-align: inherit;
    font-weight: bold;
  }
`;

export const PageSectionPaneTitle = forwardRef<
  HTMLDivElement,
  PageSectionPaneTitleProps
>(function PageSectionPaneTitle({ children, ...restProps }, ref) {
  return (
    <SPageSectionPaneTitle {...restProps} ref={ref}>
      <TypographyHeading cxVariant="h2" cxNode="h2">
        {children}
      </TypographyHeading>
    </SPageSectionPaneTitle>
  );
});
