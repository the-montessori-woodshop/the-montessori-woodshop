import { createComponentStyle } from "~/utils/createComponentStyle";
import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./ImagesGridNav.css";

export type ImagesGridNavProps = JSX.IntrinsicElements["div"] & {
  children?: ReactNode;
};

export const ImagesGridNav = forwardRef<HTMLDivElement, ImagesGridNavProps>(
  function ImagesGridNav({ className, children, ...restProps }, ref) {
    return (
      <div {...restProps} className={clsx(className, "grid-nav")} ref={ref}>
        {children}
      </div>
    );
  }
);

ImagesGridNav.links = createComponentStyle(styles);
