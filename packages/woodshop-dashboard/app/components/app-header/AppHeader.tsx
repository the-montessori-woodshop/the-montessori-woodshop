import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

export type AppHeaderProps = JSX.IntrinsicElements["header"] & {
  children?: ReactNode;
};

export const AppHeader = forwardRef<HTMLElement, AppHeaderProps>(
  function AppHeader({ className, children, ...restProps }, ref) {
    return (
      <header
        {...restProps}
        className={clsx(className, "app-header")}
        ref={ref}
      >
        {children}
      </header>
    );
  }
);
