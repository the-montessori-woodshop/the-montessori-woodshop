import "./NavbarAction.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme";

export type NavbarActionProps = JSX.IntrinsicElements["button"];

export const NavbarAction = forwardRef<HTMLButtonElement, NavbarActionProps>(
  function NavbarAction({ children, className, ...props }, ref) {
    return (
      <button className={makeClass(className, "LBhMGJ")} {...props} ref={ref}>
        {children}
      </button>
    );
  }
);
