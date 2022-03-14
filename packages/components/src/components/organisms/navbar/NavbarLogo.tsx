import "./NavbarLogo.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme/theme.utils";

export type NavbarLogoProps = JSX.IntrinsicElements["img"] & {
  src: string;
  alt: string;
};

export const NavbarLogo = forwardRef<HTMLImageElement, NavbarLogoProps>(
  function NavbarLogo({ children, className, ...props }, ref) {
    return (
      <img className={makeClass(className, "BvnaOD")} {...props} ref={ref}>
        {children}
      </img>
    );
  }
);
