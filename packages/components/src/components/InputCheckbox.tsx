import "./InputCheckbox.scss";

import React, { forwardRef, memo } from "react";

import { makeClass } from "../theme";

export type InputCheckboxProps = JSX.IntrinsicElements["input"];

export const InputCheckboxFC = forwardRef<HTMLInputElement, InputCheckboxProps>(
  function InputCheckboxFC({ className, children, ...restProps }, ref) {
    return (
      <div className={makeClass(undefined, "GMi0Qu")}>
        <input
          type="checkbox"
          className={makeClass(className, "tKJfta")}
          {...restProps}
          ref={ref}
        />
        <span />
        {children}
      </div>
    );
  }
);

export const InputCheckbox = memo(InputCheckboxFC);
