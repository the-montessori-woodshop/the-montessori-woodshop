import "./Button.scss";

import React from "react";

import { makeClass } from "../../theme";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  cxVariant?: "text" | "contained";
  cxColor?: "primary" | "secondary" | "danger" | "warning";
  cxSize?: "large" | "small";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      cxVariant,
      cxColor = "primary",
      cxSize,
      className,
      children,
      ...restProps
    },
    ref
  ) {
    return (
      <button
        ref={ref}
        className={makeClass(className, "zSIzYI", {
          [cxColor]: true,
          "v-text": cxVariant === "text",
          "v-contained": cxVariant === "contained",
          "s-lg": cxSize === "large",
          "s-sm": cxSize === "small"
        })}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);
