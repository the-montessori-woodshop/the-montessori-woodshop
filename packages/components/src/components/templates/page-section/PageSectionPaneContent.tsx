import "./PageSectionPaneContent.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme";

export type PageSectionPaneContentProps = JSX.IntrinsicElements["div"];

export const PageSectionPaneContent = forwardRef<
  HTMLDivElement,
  PageSectionPaneContentProps
>(function PageSectionPaneContent({ className, children, ...restProps }, ref) {
  return (
    <div {...restProps} className={makeClass(className, "CJOpU")} ref={ref}>
      {children}
    </div>
  );
});
