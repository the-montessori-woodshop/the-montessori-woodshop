import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./PageHeader.css";

export type PageHeaderProps = JSX.IntrinsicElements["header"] & {
  children: ReactNode;
};

export const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(
  function PageHeader({ className, children, ...restProps }, ref) {
    return (
      <header
        {...restProps}
        className={clsx(className, "page-header")}
        ref={ref}
      >
        {children}
      </header>
    );
  }
);
