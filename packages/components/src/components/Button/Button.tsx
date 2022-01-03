import "./Button.scss";

import React from "react";

import { makeClass } from "../../theme";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  cxVariant?: "text" | "contained";
  cxColor?: "primary" | "secondary";
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
    console.log(
      makeClass(className, "button", {
        [`${cxVariant}-${cxColor}`]: true
      })
    );
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
