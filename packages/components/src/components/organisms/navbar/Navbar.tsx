import "./Navbar.scss";

import React from "react";

import { makeClass } from "../../../theme";

export type NavProps = JSX.IntrinsicElements["nav"] & Record<string, unknown>;

export const Navbar = React.forwardRef<HTMLElement, NavProps>(function Navbar(
  { children, className, ...props },
  ref
) {
  return (
    <nav {...props} ref={ref} className={makeClass(className, "Aj6DddsY")}>
      {children}
    </nav>
  );
});
