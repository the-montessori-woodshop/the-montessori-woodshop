import "./Box.scss";

import React, { forwardRef, useMemo } from "react";

import { makeClass, makeRem } from "../../../theme";
import { TypographyCopy } from "../../atoms/TypographyCopy";
import { TypographyHeading } from "../../atoms/TypographyHeading";

export type BoxProps = JSX.IntrinsicElements["div"] & {
  cxTitle?: string;
  cxSubtitle?: string;
  cxFull?: boolean;
  cxVariant?: "enclosed" | "line-separated" | "dense" | "no-gutters";
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
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
    <div className={makeClass(undefined, "iZCGf")}>
      {useMemo(
        () =>
          cxTitle && (
            <TypographyHeading
              cxVariant="h5"
              cxNode="div"
              style={{ margin: 0, fontWeight: "bold" }}
            >
              {cxTitle}
            </TypographyHeading>
          ),
        [cxTitle]
      )}
      {useMemo(
        () =>
          cxSubtitle && (
            <TypographyCopy
              cxColor="textSecondary"
              cxNode="div"
              style={{
                fontSize: makeRem(14)
              }}
            >
              {cxSubtitle}
            </TypographyCopy>
          ),
        []
      )}
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
    </div>
  );
});
