import "./PageSection.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme";

export type PageSectionProps = JSX.IntrinsicElements["section"] & {
  cxLayout?: "single-pane" | "split-pane";
  cxBackground?: "main";
};

export const PageSection = forwardRef<HTMLElement, PageSectionProps>(
  function PageSection(
    {
      className,
      cxLayout = "single-pane",
      cxBackground,
      children,
      ...restProps
    },
    ref
  ) {
    return (
      <section
        {...restProps}
        className={makeClass(className, "AUh4RFk", {
          split: cxLayout === "split-pane",
          "bg-main": cxBackground === "main"
        })}
        ref={ref}
      >
        {children}
      </section>
    );
  }
);
