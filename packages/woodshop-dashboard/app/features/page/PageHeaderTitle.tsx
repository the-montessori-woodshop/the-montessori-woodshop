import type {
  TypographyHeadingElement,
  TypographyHeadingProps,
} from "@woodshop/components";
import { TypographyHeading } from "@woodshop/components";
import { forwardRef } from "react";

export type PageHeaderTitleProps = Omit<
  TypographyHeadingProps,
  "cxNode" | "cxVariant"
>;
export const PageHeaderTitle = forwardRef<
  TypographyHeadingElement,
  PageHeaderTitleProps
>(function PageHeaderTitle({ className, children, ...restProps }, ref) {
  return (
    <TypographyHeading {...restProps} cxNode="h2" cxVariant="h3" ref={ref}>
      {children}
    </TypographyHeading>
  );
});
