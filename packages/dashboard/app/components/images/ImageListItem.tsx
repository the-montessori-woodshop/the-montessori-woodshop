import { createComponentStyle } from "~/utils/createComponentStyle";
import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./ImageListItem.css";

export type ImageListItemProps = JSX.IntrinsicElements["li"] & {
  children?: ReactNode;
};

export const ImageListItem = forwardRef<HTMLLIElement, ImageListItemProps>(
  function ImageListItem({ className, children, ...restProps }, ref) {
    return (
      <li {...restProps} className={clsx(className, "img-list-item")} ref={ref}>
        {children}
      </li>
    );
  }
);

ImageListItem.links = createComponentStyle(styles);
