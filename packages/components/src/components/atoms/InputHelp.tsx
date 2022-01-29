import "./InputHelp.scss";

import React, { forwardRef, memo } from "react";

import { makeClass } from "../../theme";

export type InputHelpProps = JSX.IntrinsicElements["div"] & {
  error?: boolean | string;
  cxSize?: "default" | "small";
};

const InputHelpFC = forwardRef<HTMLDivElement, InputHelpProps>(
  function InputHelpFC(
    { className, children, cxSize = "default", error, ...props },
    ref
  ) {
    if (!children) {
      return null;
    }

    return (
      <div
        className={makeClass(className, "pwt64he", {
          error: !!error,
          "s-lg": cxSize === "default",
          "s-sm": cxSize === "small"
        })}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export const InputHelp = memo(InputHelpFC);
