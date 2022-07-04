import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./ImagesGridEditTitle.css";

export type ImagesGridEditTitleProps = JSX.IntrinsicElements["div"] & {
  children?: ReactNode;
};

export const ImagesGridEditTitle = forwardRef<
  HTMLDivElement,
  ImagesGridEditTitleProps
>(function ImagesGridEditTitle({ className, children, ...restProps }, ref) {
  return (
    <div {...restProps} className={clsx(className, "edit-title")} ref={ref}>
      {children}
    </div>
  );
});
