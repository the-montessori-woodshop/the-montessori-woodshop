import { styled } from "@linaria/react";
import React, { forwardRef } from "react";

import { makeRem } from "../../../theme";

export type NavbarLogoProps = JSX.IntrinsicElements["img"] & {
  src: string;
  alt: string;
};

const SImg = styled.img`
  border: none;
  background: none;
  max-height: ${makeRem(56)};
  width: auto;
`;

export const NavbarLogo = forwardRef<HTMLImageElement, NavbarLogoProps>(
  function NavbarLogo({ children, ...props }, ref) {
    return (
      <SImg {...props} ref={ref}>
        {children}
      </SImg>
    );
  }
);
