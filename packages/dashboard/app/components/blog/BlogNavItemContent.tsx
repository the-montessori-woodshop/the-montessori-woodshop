import { TypographyCopy } from "@woodshop/components";
import { createComponentStyle } from "~/utils/createComponentStyle";
import clsx from "clsx";
import React, { forwardRef } from "react";

import styles from "./BlogNavItemContent.css";

export type BlogNavItemContentProps = JSX.IntrinsicElements["div"] & {
  isActive?: boolean;
};

export const BlogNavItemContent = forwardRef<
  HTMLDivElement,
  BlogNavItemContentProps
>(function BlogNavItemContent(
  { children, className, isActive, ...restProps },
  ref
) {
  return (
    <div
      {...restProps}
      className={clsx(className, "blog-nav-item-content", {
        active: isActive,
      })}
      ref={ref}
    >
      <TypographyCopy>{children}</TypographyCopy>
    </div>
  );
});

BlogNavItemContent.links = createComponentStyle(styles);
