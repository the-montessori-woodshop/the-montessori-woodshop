import { styled } from "@linaria/react";
import React, { forwardRef, memo } from "react";

export const SDl = styled.dl`
  margin: 0;
`;

export type DescriptionListProps = JSX.IntrinsicElements["dl"];

export const DescriptionListFC = forwardRef<
  HTMLDListElement,
  DescriptionListProps
>(function DescriptionListFC({ children, ...restProps }, ref) {
  return (
    <SDl {...restProps} ref={ref}>
      {children}
    </SDl>
  );
});

export const DescriptionList = memo(DescriptionListFC);
