import "./FooterSectionContentText.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme/theme.utils";
import { TypographyCopy } from "../../atoms/TypographyCopy";

export type FooterSectionContentTextProps = JSX.IntrinsicElements["div"];

export const FooterSectionContentText = forwardRef<
  HTMLDivElement,
  FooterSectionContentTextProps
>(function FooterSectionContentText({ children, className, ...props }, ref) {
  return (
    <div className={makeClass(className, "eLUMc3")}>
      <TypographyCopy {...props} cxNode="div" cxVariant="body2" ref={ref}>
        {children}
      </TypographyCopy>
    </div>
  );
});
