import "./FooterSection.scss";

import React from "react";
import { forwardRef } from "react";

import { makeClass } from "../../../theme/theme.utils";

export type FooterSectionProps = JSX.IntrinsicElements["div"];

export const FooterSection = forwardRef<HTMLDivElement, FooterSectionProps>(
  function FooterSection({ children, className, ...props }, ref) {
    return (
      <div {...props} className={makeClass(className, "lzPr5p")} ref={ref}>
        {children}
      </div>
    );
  }
);
