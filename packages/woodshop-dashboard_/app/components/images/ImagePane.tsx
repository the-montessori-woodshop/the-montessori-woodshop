import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./ImagePane.css";

export type ImagePaneProps = JSX.IntrinsicElements["article"] & {
  children?: ReactNode;
};

export const ImagePane = forwardRef<HTMLElement, ImagePaneProps>(
  function ImagePane({ className, children, ...restProps }, ref) {
    return (
      <article {...restProps} className={clsx(className, "img-pane")} ref={ref}>
        {children}
      </article>
    );
  }
);
