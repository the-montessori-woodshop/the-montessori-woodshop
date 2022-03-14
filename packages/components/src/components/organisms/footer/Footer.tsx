import { styled } from "@linaria/react";
import React from "react";
import { forwardRef } from "react";

import { makeRem, makeResponsiveMedia } from "../../../theme/theme.utils";

export type FooterProps = JSX.IntrinsicElements["footer"];

const SFooter = styled.footer`
  padding: ${makeRem(40)} ${makeRem(32)};
  background: var(--color-primary);

  ${makeResponsiveMedia("desktop")} {
    padding: ${makeRem(64)} ${makeRem(60)};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const Footer = forwardRef<HTMLElement, FooterProps>(function Footer(
  { children, ...props },
  ref
) {
  return (
    <SFooter {...props} ref={ref}>
      {children}
    </SFooter>
  );
});
