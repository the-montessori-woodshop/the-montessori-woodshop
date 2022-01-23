import "./TypographyHeading.scss";

import React, { useMemo } from "react";

import { makeClass } from "../../theme";

type HeadingNodes = "h1" | "h2" | "h3" | "h4" | "h5";

export type TypographyHeadingProps = JSX.IntrinsicElements[HeadingNodes] & {
  cxNode?: HeadingNodes;
  cxVariant: HeadingNodes | "subtitle1" | "subtitle2";
};

export const TypographyHeading = React.forwardRef<
  HTMLHeadingElement,
  TypographyHeadingProps
>(function TypographyHeading(
  {
    cxNode = "h1",
    cxVariant = "h1",
    className: clsNme,
    children,
    ...restProps
  },
  ref
) {
  const className = useMemo(
    () =>
      makeClass(clsNme, "typ-heading", {
        cxVariant
      }),
    []
  );

  if (cxNode === "h2") {
    return (
      <h2 className={className} {...restProps} ref={ref}>
        {children}
      </h2>
    );
  }

  if (cxNode === "h3") {
    return (
      <h3 className={className} {...restProps} ref={ref}>
        {children}
      </h3>
    );
  }

  if (cxNode === "h4") {
    return (
      <h4 className={className} {...restProps} ref={ref}>
        {children}
      </h4>
    );
  }

  if (cxNode === "h5") {
    return (
      <h5 className={className} {...restProps} ref={ref}>
        {children}
      </h5>
    );
  }

  return (
    <h1 className={className} {...restProps} ref={ref}>
      {children}
    </h1>
  );
});
