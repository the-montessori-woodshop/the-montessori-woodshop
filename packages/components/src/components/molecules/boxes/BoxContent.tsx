import "./BoxContent.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme";

export type BoxContentProps = JSX.IntrinsicElements["div"] & {
  cxTitle?: string;
  cxSubtitle?: string;
  cxFull?: boolean;
  cxVariant?: "enclosed" | "line-separated" | "dense" | "no-gutters";
};

export const BoxContent = forwardRef<HTMLDivElement, BoxContentProps>(
  function BoxContent(
    {
      className,
      children,
      cxTitle,
      cxSubtitle,
      cxVariant = "enclosed",
      ...restProps
    },
    ref
  ) {
    return (
      <div
        {...restProps}
        className={makeClass(className, "b3uNxd", {
          hasTitles: cxTitle || cxSubtitle,
          enclosed: cxVariant === "enclosed",
          line: cxVariant === "line-separated",
          dense: cxVariant === "dense",
          flush: cxVariant === "no-gutters"
        })}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
