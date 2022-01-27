import "./Button.scss";

import React from "react";

import { makeClass } from "../theme";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  cxVariant?: "text" | "contained";
  cxColor?: "primary" | "secondary" | "danger" | "warning";
  cxSize?: "large" | "small";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      cxVariant = "contained",
      cxColor = "primary",
      cxSize = "large",
      className,
      children,
      ...restProps
    },
    ref
  ) {
    return (
      <button
        ref={ref}
        className={makeClass(className, "button", {
          [cxColor]: true,
          [cxVariant]: true,
          [cxSize]: true
        })}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);
