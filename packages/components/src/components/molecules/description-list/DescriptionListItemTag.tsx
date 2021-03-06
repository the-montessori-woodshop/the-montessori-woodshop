import { styled } from "@linaria/react";
import React, { ReactNode, forwardRef, memo } from "react";

import { TypographyCopy } from "../../atoms/typography/TypographyCopy";

const SDt = styled.dt`
  & > div {
    white-space: nowrap;
  }
`;
export type DescriptionListItemTagProos = { children: ReactNode };

export const DescriptionListItemTagFC = forwardRef<
  HTMLElement,
  DescriptionListItemTagProos
>(function DescriptionListItemTagFC({ children, ...restProps }, ref) {
  return (
    <SDt {...restProps} ref={ref}>
      <TypographyCopy cxVariant="caption" cxColor="textSecondary" cxNode="div">
        {children}
      </TypographyCopy>
    </SDt>
  );
});

export const DescriptionListItemTag = memo(DescriptionListItemTagFC);
