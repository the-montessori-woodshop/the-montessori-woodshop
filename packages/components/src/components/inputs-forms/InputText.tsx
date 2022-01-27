import "./InputText.scss";

import React, { forwardRef, memo } from "react";

import { makeClass } from "../../theme";

export type InputTextProps = Omit<JSX.IntrinsicElements["input"], "type"> & {
  cxSize?: "default" | "small";
  cxError?: boolean;
  type?: "text" | "number";
};

const InputTextFC = forwardRef<HTMLInputElement, InputTextProps>(
  function InputTextFC(
    { className, type = "text", cxSize = "default", cxError, ...props },
    ref
  ) {
    return (
      <input
        {...props}
        ref={ref}
        type={type}
        className={makeClass(className, "input-text", {
          lg: cxSize === "default",
          sm: cxSize === "small",
          error: cxError
        })}
      />
    );
  }
);

export const InputText = memo(InputTextFC);
