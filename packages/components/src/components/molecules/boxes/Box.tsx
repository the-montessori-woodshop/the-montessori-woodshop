import { styled } from "@linaria/react";
import React, { forwardRef } from "react";

import { makeRem } from "../../../theme/theme.utils";

export type BoxProps = JSX.IntrinsicElements["div"];

const SDiv = styled.div`
  & + & {
    margin-top: ${makeRem(48)};
  }
`;

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  { children, ...restProps },
  ref
) {
  return (
    <SDiv {...restProps} ref={ref}>
      {children}
    </SDiv>
  );
});
