import "./PageSectionPaneTitle.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme";
import { TypographyHeading } from "../../atoms/TypographyHeading";

export type PageSectionPaneTitleProps = JSX.IntrinsicElements["div"];

export const PageSectionPaneTitle = forwardRef<
  HTMLDivElement,
  PageSectionPaneTitleProps
>(function PageSectionPaneTitle({ className, children, ...restProps }, ref) {
  return (
    <div {...restProps} className={makeClass(className, "LQv47VE2")} ref={ref}>
      <TypographyHeading
        cxVariant="h2"
        cxNode="h2"
        style={{
          fontWeight: "bold"
        }}
      >
        {children}
      </TypographyHeading>
    </div>
  );
});
