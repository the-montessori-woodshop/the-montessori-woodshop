import "./NavbarLinkListItem.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme/theme.utils";

export type NavbarLinkListItemProps = JSX.IntrinsicElements["li"];

export const NavbarLinkListItem = forwardRef<
  HTMLLIElement,
  NavbarLinkListItemProps
>(function NavbarLinkListItem({ children, className, ...props }, ref) {
  return (
    <li className={makeClass(className, "XXvYRD")} {...props} ref={ref}>
      {children}
    </li>
  );
});
