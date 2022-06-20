import { createComponentStyle } from "~/components/utils/createComponentStyle";
import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./ImagesGridMainTitle.css";

export type ImagesGridMainTitleProps = JSX.IntrinsicElements["div"] & {
  children?: ReactNode;
};

export const ImagesGridMainTitle = forwardRef<
  HTMLDivElement,
  ImagesGridMainTitleProps
>(function ImagesGridMainTitle({ className, children, ...restProps }, ref) {
  return (
    <div {...restProps} className={clsx(className, "main-title")} ref={ref}>
      {children}
    </div>
  );
});

ImagesGridMainTitle.links = createComponentStyle(styles);
