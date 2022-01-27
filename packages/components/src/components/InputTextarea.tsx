import "./InputTextarea.scss";

import React, { forwardRef, memo } from "react";

import { makeClass } from "../theme";

export type InputTextareaProps = JSX.IntrinsicElements["textarea"] & {
  cxError?: boolean;
};

const InputTextareaFC = forwardRef<HTMLTextAreaElement, InputTextareaProps>(
  function InputTextareaFC({ className, cxError, ...props }, ref) {
    return (
      <textarea
        {...props}
        ref={ref}
        className={makeClass(className, "G6slgSB", {
          error: cxError
        })}
      />
    );
  }
);

export const InputTextarea = memo(InputTextareaFC);
