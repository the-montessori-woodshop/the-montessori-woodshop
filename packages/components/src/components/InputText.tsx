import "./InputText.scss";

import React, { forwardRef, memo } from "react";

import { makeClass } from "../theme";

export type InputTextProps = Omit<JSX.IntrinsicElements["input"], "type"> & {
  cxSize?: "default" | "small";
  cxAlignment?: "left" | "center";
  cxError?: boolean;
  type?: "text" | "number";
};

const InputTextFC = forwardRef<HTMLInputElement, InputTextProps>(
  function InputTextFC(
    {
      className,
      type = "text",
      cxSize = "default",
      cxAlignment = "left",
      cxError,
      ...props
    },
    ref
  ) {
    return (
      <input
        {...props}
        ref={ref}
        type={type}
        className={makeClass(className, "UOD95", {
          "s-lg": cxSize === "default",
          "s-sm": cxSize === "small",
          "a-center": cxAlignment === "center",
          error: cxError
        })}
      />
    );
  }
);

export const InputText = memo(InputTextFC);
