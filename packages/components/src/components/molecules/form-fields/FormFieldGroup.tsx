import "./FormFieldGroup.scss";

import React from "react";
import { forwardRef } from "react";

import { makeClass } from "../../../theme";

export type FormFieldGroupProps = JSX.IntrinsicElements["div"] & {
  cxLayout?: "stacked" | "inline" | "inline-fill";
};

export const FormFieldGroup = forwardRef<HTMLDivElement, FormFieldGroupProps>(
  function FormFieldGroup(
    { children, className, cxLayout = "stacked", ...restProps },
    ref
  ) {
    return (
      <div
        className={makeClass(className, "aX1cUf", {
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
