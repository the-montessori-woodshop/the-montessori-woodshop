import "./BoxHeader.scss";

import React, { forwardRef, memo, useMemo } from "react";

import { makeClass, makeRem } from "../../../theme";
import { TypographyCopy } from "../../atoms/TypographyCopy";
import { TypographyHeading } from "../../atoms/TypographyHeading";

export type BoxHeaderProps = JSX.IntrinsicElements["header"] & {
  cxTitle?: string;
  cxSubtitle?: string;
};

const BoxHeaderFC = forwardRef<HTMLHeadingElement, BoxHeaderProps>(
  function BoxTitleFC({ cxTitle, cxSubtitle, className, ...restProps }, ref) {
    return (
      <header
        ref={ref}
        {...restProps}
        className={makeClass(className, "fnEVud")}
      >
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
      </header>
    );
  }
);

export const BoxHeader = memo(BoxHeaderFC);
