import {
  TypographyHeading,
  TypographyHeadingElement,
  TypographyHeadingProps,
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
        margin: 0,
      }}
      ref={ref}
    >
      {children}
    </TypographyHeading>
  );
});
