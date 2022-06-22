import { createComponentStyle } from "~/components/utils/createComponentStyle";
import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./ImagesGrid.css";

export type ImagesGridProps = JSX.IntrinsicElements["div"] & {
  children?: ReactNode;
};

export const ImagesGrid = forwardRef<HTMLDivElement, ImagesGridProps>(
  function ImagesGrid({ className, children, ...restProps }, ref) {
    return (
      <div {...restProps} className={clsx(className, "images-grid")} ref={ref}>
        {children}
      </div>
    );
  }
);

ImagesGrid.links = createComponentStyle(styles);
