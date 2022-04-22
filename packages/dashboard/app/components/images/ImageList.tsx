import { createComponentStyle } from "~/utils/createComponentStyle";
import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./ImageList.css";

export type ImageListProps = JSX.IntrinsicElements["ul"] & {
  children?: ReactNode;
};

export const ImageList = forwardRef<HTMLUListElement, ImageListProps>(
  function ImageList({ className, children, ...restProps }, ref) {
    return (
      <ul {...restProps} className={clsx(className, "img-list")} ref={ref}>
        {children}
      </ul>
    );
  }
);

ImageList.links = createComponentStyle(styles);
