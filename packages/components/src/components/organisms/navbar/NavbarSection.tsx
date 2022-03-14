import "./NavbarSection.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme/theme.utils";

export type NavbarSectionProps = JSX.IntrinsicElements["div"] & {
  cxMain?: boolean;
};

export const NavbarSection = forwardRef<HTMLDivElement, NavbarSectionProps>(
  function NavbarSection(
    { children, className, cxMain = false, ...props },
    ref
  ) {
    return (
      <div
        className={makeClass(className, "MyRiqFV", {
          expand: cxMain
        })}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
