import type { ReactNode } from "react";
import { forwardRef } from "react";

import { makeStyles } from "./page.utils";

export type PageBodyProps = JSX.IntrinsicElements["div"] & {
  children: ReactNode;
};
export const PageBody = forwardRef<HTMLDivElement, PageBodyProps>(
  function PageBody({ className, children, ...restProps }, ref) {
    return (
      <div {...restProps} className={makeStyles(className)("body")} ref={ref}>
        {children}
      </div>
    );
  }
);
