import "./TypographyCopy.scss";

import React, { useMemo } from "react";

import { makeClass } from "../../theme";

export type TypographyCopyProps = (
  | JSX.IntrinsicElements["p"]
  | JSX.IntrinsicElements["span"]
  | JSX.IntrinsicElements["div"]
) & {
  cxNode?: "p" | "div" | "span";
  cxVariant?: "body1" | "body2" | "caption" | "overline";
  cxColor?: "textPrimary" | "textSecondary" | "danger" | "warning" | "success";
};

export const TypographyCopy = React.forwardRef<
  HTMLParagraphElement | HTMLDivElement,
  TypographyCopyProps
>(function TypographyCopy(
  {
    cxNode = "div",
    cxVariant = "body1",
    cxColor = "textPrimary",
    className: clsNme,
    children,
    ...restProps
  },
  ref
) {
  const className = useMemo(
    () =>
      makeClass(clsNme, "typ-copy", {
        [cxColor]: true,
        [cxVariant]: true
      }),
    []
  );

  if (cxNode === "p") {
    return (
      <p className={className} {...restProps} ref={ref}>
        {children}
      </p>
    );
  }

  if (cxNode === "span") {
    return (
      <span className={className} {...restProps} ref={ref}>
        {children}
      </span>
    );
  }

  return (
    <div className={className} {...restProps} ref={ref}>
      {children}
    </div>
  );
});
