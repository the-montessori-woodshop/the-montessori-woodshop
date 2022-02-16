import "./TypographyHeading.scss";

import React, { useMemo } from "react";

import { makeClass } from "../../theme";

type HeadingNodes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

export type TypographyHeadingProps = JSX.IntrinsicElements[HeadingNodes] & {
  cxNode: HeadingNodes;
  cxVariant?: HeadingNodes | "subtitle1" | "subtitle2";
};

export const TypographyHeading = React.forwardRef<
  HTMLHeadingElement | HTMLDivElement,
  TypographyHeadingProps
>(function TypographyHeading(
  { cxNode = "h1", cxVariant, className: clsNme, children, ...restProps },
  ref
) {
  const className = useMemo(() => {
    return makeClass(clsNme, "typ-heading", {
      [cxVariant || cxNode]: true
    });
  }, []);

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

  if (cxNode === "div") {
    return (
      <div className={className} {...restProps} ref={ref}>
        {children}
      </div>
    );
  }

  return (
    <h1 className={className} {...restProps} ref={ref}>
      {children}
    </h1>
  );
});
