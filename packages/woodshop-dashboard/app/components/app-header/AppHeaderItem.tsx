import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

export type AppHeaderItemProps = JSX.IntrinsicElements["div"] & {
  children?: ReactNode;
};

export const AppHeaderItem = forwardRef<HTMLDivElement, AppHeaderItemProps>(
  function AppHeaderItem({ className, children, ...restProps }, ref) {
    return (
      <div {...restProps} className={clsx(className, "head-item")} ref={ref}>
        {children}
      </div>
    );
  }
);
