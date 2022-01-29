import "./InputLabel.scss";

import React, { forwardRef, memo } from "react";

import { makeClass } from "../../theme";

export type InputLabelProps = JSX.IntrinsicElements["label"] & {
  cxSize?: "default" | "small";
  error?: string;
};

const InputLabelFC = forwardRef<HTMLLabelElement, InputLabelProps>(
  function InputLabelFC(
    { children, className, cxSize = "default", error = false, ...props },
    ref
  ) {
    return (
      <label
        className={makeClass(className, "Ahgo42vh", {
          "s-lg": cxSize === "default",
          "s-sm": cxSize === "small",
          error: !!error
        })}
        {...props}
        ref={ref}
      >
        {children}
      </label>
    );
  }
);
export const InputLabel = memo(InputLabelFC);
