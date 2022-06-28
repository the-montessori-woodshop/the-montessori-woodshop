import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./PageContainer.css";

export type PageContainerProps = JSX.IntrinsicElements["div"] & {
  children?: ReactNode;
};

export const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  function PageContainer({ className, children, ...restProps }, ref) {
    return (
      <div
        {...restProps}
        className={clsx(className, "page-container")}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
