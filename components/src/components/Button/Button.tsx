import clsx from "clsx";
import React from "react";

import * as ButtonStyle from "./Button.scss";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  cxVariant?: "primary" | "secondary" | "text";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { cxVariant = "primary", className, children, ...restProps },
    ref
  ) {
    return (
      <button
        ref={ref}
        className={clsx(className, {
          [ButtonStyle.primary]: cxVariant === "primary",
          [ButtonStyle.secondary]: cxVariant === "secondary"
        })}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);
