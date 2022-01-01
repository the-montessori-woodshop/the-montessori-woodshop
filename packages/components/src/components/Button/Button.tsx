import "./Button.scss";

import React from "react";

import { makeClass } from "../../theme";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  cxVariant?: "primary" | "secondary";
  cxColor?: "text" | "contained";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      cxVariant = "primary",
      cxColor = "contained",
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
          [`${cxVariant}-${cxColor}`]: true
        })}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);
