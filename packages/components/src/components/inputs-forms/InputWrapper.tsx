import "./InputWrapper.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../theme";

export type InputWrapperProps = JSX.IntrinsicElements["div"];

export const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>(
  function InputWrapper({ children, className, ...props }, ref) {
    return (
      <div
        {...props}
        ref={ref}
        className={makeClass(className, "input-wrapper")}
      >
        {children}
      </div>
    );
  }
);
