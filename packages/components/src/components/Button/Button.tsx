import "./Button.scss";

import React from "react";

import { makeClass } from "../../theme";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  cxVariant?: "text" | "contained";
  cxColor?: "primary" | "secondary" | "danger" | "warning";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      cxVariant = "contained",
      cxColor = "primary",
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
          primary: cxColor === "primary",
          secondary: cxColor === "secondary",
          text: cxVariant === "text",
          contained: cxVariant === "contained"
        })}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);
