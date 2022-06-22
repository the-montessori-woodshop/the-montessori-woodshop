import type {
  TypographyHeadingElement,
  TypographyHeadingProps,
} from "@woodshop/components";
import { TypographyHeading } from "@woodshop/components";
import { forwardRef } from "react";

export const PageTitle = forwardRef<
  TypographyHeadingElement,
  Omit<TypographyHeadingProps, "cxVariant" | "cxNode">
>(function PageTitle({ children, style, ...restProps }, ref) {
  return (
    <TypographyHeading
      {...restProps}
      cxVariant="h3"
      cxNode="h2"
      style={{
        ...style,
        margin: 0,
      }}
      ref={ref}
    >
      {children}
    </TypographyHeading>
  );
});
