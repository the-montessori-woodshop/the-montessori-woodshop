import { createComponentStyle } from "~/utils/createComponentStyle";
import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./ImagesGridEditContent.css";

export type ImagesGridEditContentProps = JSX.IntrinsicElements["div"] & {
  children?: ReactNode;
};

export const ImagesGridEditContent = forwardRef<
  HTMLDivElement,
  ImagesGridEditContentProps
>(function ImagesGridEditContent({ className, children, ...restProps }, ref) {
  return (
    <div {...restProps} className={clsx(className, "edit-content")} ref={ref}>
      {children}
    </div>
  );
});

ImagesGridEditContent.links = createComponentStyle(styles);
