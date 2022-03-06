import { FC, forwardRef } from "react";

import { Summary, SummaryBody, SummaryHeader } from "../summary";

export const CheckoutSummary = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
>(function CheckoutSummary({ children, ...restProps }, ref) {
  return (
    <Summary {...restProps} ref={ref}>
      <SummaryHeader />
      <SummaryBody>{children}</SummaryBody>
    </Summary>
  );
});
