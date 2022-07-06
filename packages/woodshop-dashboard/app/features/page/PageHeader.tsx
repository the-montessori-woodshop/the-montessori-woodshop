import type { ReactNode } from "react";
import { forwardRef } from "react";

import { makeStyles } from "./page.utils";

export type PageHeaderProps = JSX.IntrinsicElements["div"] & {
  children: ReactNode;
};
export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  function PageHeader({ className, children, ...restProps }, ref) {
    return (
      <div {...restProps} className={makeStyles(className)("header")} ref={ref}>
        {children}
      </div>
    );
  }
);
