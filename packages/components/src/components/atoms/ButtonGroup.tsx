import "./ButtonGroup.scss";

import React from "react";
import { forwardRef } from "react";

import { makeClass } from "../../theme";

export type ButtonGroupProps = JSX.IntrinsicElements["div"] & {
  cxLayout?: "stacked" | "inline" | "inline-fill";
};

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup(
    { children, className, cxLayout = "stacked", ...restProps },
    ref
  ) {
    return (
      <div
        className={makeClass(className, "vm2JNB", {
          stacked: cxLayout === "stacked",
          inline: cxLayout === "inline" || cxLayout === "inline-fill",
          fill: cxLayout === "inline-fill"
        })}
        {...restProps}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
