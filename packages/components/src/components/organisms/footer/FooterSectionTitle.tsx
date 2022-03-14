import "./FooterSectionTitle.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme/theme.utils";
import { TypographyHeading } from "../../atoms/TypographyHeading";

export type FooterSectionTitleProps = JSX.IntrinsicElements["div"];

export const FooterSectionTitle = forwardRef<
  HTMLDivElement,
  FooterSectionTitleProps
>(function FooterSectionTitle({ children, className, ...props }, ref) {
  return (
    <div {...props} className={makeClass(className, "U8fFbUv")} ref={ref}>
      <TypographyHeading
        cxVariant="h5"
        cxNode="div"
        color="inherit"
        style={{ marginTop: 0 }}
      >
        {children}
      </TypographyHeading>
    </div>
  );
});
