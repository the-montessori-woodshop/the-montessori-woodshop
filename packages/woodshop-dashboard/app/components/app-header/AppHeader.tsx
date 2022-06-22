import { createComponentStyle } from "~/components/utils/createComponentStyle";
import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./AppHeader.css";

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

AppHeader.links = createComponentStyle(styles);
