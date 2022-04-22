import { createComponentStyle } from "~/utils/createComponentStyle";
import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./ImagePaneContent.css";

export type ImagePaneContentProps = JSX.IntrinsicElements["article"] & {
  children?: ReactNode;
};

export const ImagePaneContent = forwardRef<HTMLElement, ImagePaneContentProps>(
  function ImagePaneContent({ className, children, ...restProps }, ref) {
    return (
      <article
        {...restProps}
        className={clsx(className, "img-pane-content")}
        ref={ref}
      >
        {children}
      </article>
    );
  }
);

ImagePaneContent.links = createComponentStyle(styles);
