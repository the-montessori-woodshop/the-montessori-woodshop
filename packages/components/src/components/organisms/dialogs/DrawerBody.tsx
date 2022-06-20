import { styled } from "@linaria/react";
import React, { forwardRef } from "react";

import { makeRem, makeResponsiveMedia } from "../../../theme/theme.utils";

export type DrawerBodyProps = JSX.IntrinsicElements["div"];

const SDrawerBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 ${makeRem(32)};
  z-index: 1000000;

  ${makeResponsiveMedia("tablet")} {
    padding: 0 ${makeRem(60)};
  }
`;

export const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(
  function DrawerBody({ children, ...restProps }, ref) {
    return (
      <SDrawerBody {...restProps} ref={ref}>
        {children}
      </SDrawerBody>
    );
  }
);
