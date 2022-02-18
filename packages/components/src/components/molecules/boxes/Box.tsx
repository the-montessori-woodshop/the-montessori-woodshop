import "./Box.scss";

import React, { forwardRef, useMemo } from "react";

import { makeClass } from "../../../theme";
import { TypographyCopy } from "../../atoms/TypographyCopy";
import { TypographyHeading } from "../../atoms/TypographyHeading";

export type BoxProps = JSX.IntrinsicElements["div"] & {
  cxTitle?: string;
  cxSubtitle?: string;
  cxFull?: boolean;
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  { className, children, cxTitle, cxSubtitle, ...restProps },
  ref
) {
  return (
    <section>
      {useMemo(
        () =>
          cxTitle && (
            <TypographyHeading
              cxVariant="h4"
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
            <TypographyCopy cxColor="textSecondary" cxNode="div">
              {cxSubtitle}
            </TypographyCopy>
          ),
        []
      )}
      <div
        {...restProps}
        className={makeClass(className, "b3uNxd", {
          hasTitles: cxTitle || cxSubtitle
        })}
        ref={ref}
      >
        {children}
      </div>
    </section>
  );
});
