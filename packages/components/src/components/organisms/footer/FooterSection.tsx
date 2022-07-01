import { styled } from "@linaria/react";
import React from "react";
import { forwardRef } from "react";

import { makeRem, makeResponsiveMedia } from "../../../theme/theme.utils";

export type FooterSectionProps = JSX.IntrinsicElements["div"];

const SFooterSection = styled.footer`
  ${makeResponsiveMedia("mobile")} {
    & + & {
      margin-top: ${makeRem(60)};
    }
  }

  ${makeResponsiveMedia("desktop")} {
    & + & {
      margin-top: 0;
      margin-left: ${makeRem(60)};
    }
  }
`;

export const FooterSection = forwardRef<HTMLDivElement, FooterSectionProps>(
  function FooterSection({ children, ...props }, ref) {
    return (
      <SFooterSection {...props} ref={ref}>
        {children}
      </SFooterSection>
    );
  }
);
