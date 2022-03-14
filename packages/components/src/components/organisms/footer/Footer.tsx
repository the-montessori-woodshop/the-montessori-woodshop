import "./Footer.scss";

import React from "react";
import { forwardRef } from "react";

import { makeClass } from "../../../theme/theme.utils";

export type FooterProps = JSX.IntrinsicElements["footer"];

export const Footer = forwardRef<HTMLElement, FooterProps>(function Footer(
  { children, className, ...props },
  ref
) {
  return (
    <footer {...props} className={makeClass(className, "iogigS8")} ref={ref}>
      {children}
    </footer>
  );
});
