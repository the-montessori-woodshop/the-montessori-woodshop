import { createComponentStyle } from "~/components/utils/createComponentStyle";
import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./PageContent.css";

export type PageContentProps = JSX.IntrinsicElements["div"] & {
  children?: ReactNode;
};

export const PageContent = forwardRef<HTMLDivElement, PageContentProps>(
  function PageContent({ className, children, ...restProps }, ref) {
    return (
      <div {...restProps} className={clsx(className, "page-content")} ref={ref}>
        {children}
      </div>
    );
  }
);

PageContent.links = createComponentStyle(styles);
