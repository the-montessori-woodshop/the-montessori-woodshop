import "./NavbarLinkListItemText.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme";

export type NavbarLinkListItemTextProps = JSX.IntrinsicElements["div"] & {
  active?: boolean;
};

export const NavbarLinkListItemText = forwardRef<
  HTMLDivElement,
  NavbarLinkListItemTextProps
>(function NavbarLinkListItemText(
  { children, className, active, ...props },
  ref
) {
  return (
    <div
      className={makeClass(className, "EzUv7i", {
        isActive: active
      })}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
});
