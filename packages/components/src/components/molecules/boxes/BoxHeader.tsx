import { styled } from "@linaria/react";
import React, { forwardRef, memo, useMemo } from "react";

import { makeRem } from "../../../theme";
import { TypographyCopy } from "../../atoms/TypographyCopy";
import { TypographyHeading } from "../../atoms/TypographyHeading";

export type BoxHeaderProps = JSX.IntrinsicElements["header"] & {
  cxTitle?: string;
  cxSubtitle?: string;
};

const SHeader = styled.header`
  padding-bottom: ${makeRem(8)};
`;

const BoxHeaderFC = forwardRef<HTMLHeadingElement, BoxHeaderProps>(
  function BoxTitleFC({ cxTitle, cxSubtitle, ...restProps }, ref) {
    return (
      <SHeader ref={ref} {...restProps}>
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
      </SHeader>
    );
  }
);

export const BoxHeader = memo(BoxHeaderFC);
