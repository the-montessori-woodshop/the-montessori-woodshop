import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./ImageListItemContent.css";

export type ImageListItemContentProps = JSX.IntrinsicElements["div"] & {
  children?: ReactNode;
};

export const ImageListItemContent = forwardRef<
  HTMLDivElement,
  ImageListItemContentProps
>(function ImageListItemContent({ className, children, ...restProps }, ref) {
  return (
    <div
      {...restProps}
      className={clsx(className, "img-list-item-content")}
      ref={ref}
    >
      {children}
    </div>
  );
});
