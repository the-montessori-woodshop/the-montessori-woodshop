import {
  TypographyHeading,
  TypographyHeadingElement,
  TypographyHeadingProps,
  makeRem,
} from "@woodshop/components";
import { forwardRef } from "react";

export const PageTitle = forwardRef<
  TypographyHeadingElement,
  Omit<TypographyHeadingProps, "cxVariant" | "cxNode" | "style">
>(function PageTitle({ children, ...restProps }, ref) {
  return (
    <TypographyHeading
      {...restProps}
      cxVariant="h3"
      cxNode="h2"
      style={{
        marginTop: "2rem",
        paddingLeft: makeRem(32),
        paddingRight: makeRem(32),
      }}
      ref={ref}
    >
      {children}
    </TypographyHeading>
  );
});
