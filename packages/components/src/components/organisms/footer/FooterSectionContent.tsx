import "./FooterSectionContent.scss";

import React from "react";
import { forwardRef } from "react";

import { makeClass } from "../../../theme/theme.utils";

export type FooterSectionContentProps = JSX.IntrinsicElements["div"];

export const FooterSectionContent = forwardRef<
  HTMLDivElement,
  FooterSectionContentProps
>(function FooterSectionContent({ children, className, ...props }, ref) {
  return (
    <div {...props} className={makeClass(className, "bHcNPR")} ref={ref}>
      {children}
    </div>
  );
});
