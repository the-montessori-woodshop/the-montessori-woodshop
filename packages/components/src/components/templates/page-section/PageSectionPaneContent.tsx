import { styled } from "@linaria/react";
import React, { forwardRef } from "react";

export type PageSectionPaneContentProps = JSX.IntrinsicElements["div"];

const SPageSectionContent = styled.div`
  & * {
      margin: inherit;
    }
  }
`;

export const PageSectionPaneContent = forwardRef<
  HTMLDivElement,
  PageSectionPaneContentProps
>(function PageSectionPaneContent({ children, ...restProps }, ref) {
  return (
    <SPageSectionContent {...restProps} ref={ref}>
      {children}
    </SPageSectionContent>
  );
});
