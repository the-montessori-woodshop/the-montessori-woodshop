import "./PageSectionPane.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme";

export type PageSectionPaneProps = JSX.IntrinsicElements["div"] & {
  cxAlign?: "left" | "center";
};

export const PageSectionPane = forwardRef<HTMLDivElement, PageSectionPaneProps>(
  function PageSectionPane(
    { className, children, cxAlign = "center", ...restProps },
    ref
  ) {
    return (
      <div
        {...restProps}
        className={makeClass(className, "aS1RjE", {
          center: cxAlign === "center"
        })}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
