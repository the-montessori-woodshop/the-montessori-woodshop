import "./InputRadio.scss";

import React, { forwardRef, memo } from "react";

import { makeClass } from "../theme";

export type InputRadioProps = JSX.IntrinsicElements["input"];

export const InputRadioFC = forwardRef<HTMLInputElement, InputRadioProps>(
  function InputRadioFC({ className, children, ...restProps }, ref) {
    return (
      <div className={makeClass(undefined, "aVnIs0")}>
        <input
          type="radio"
          className={makeClass(className, "G3LKFQ")}
          {...restProps}
          ref={ref}
        />
        <span />
        {children}
      </div>
    );
  }
);

export const InputRadio = memo(InputRadioFC);
