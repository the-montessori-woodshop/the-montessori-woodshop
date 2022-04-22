import type { NavLinkProps } from "@remix-run/react";
import { NavLink } from "@remix-run/react";
import { createComponentStyle } from "~/utils/createComponentStyle";
import type { ReactNode } from "react";
import React, { forwardRef } from "react";

import styles from "./BlogNavItem.css";

export const BlogNavItem = forwardRef<
  HTMLAnchorElement,
  NavLinkProps & { children: ReactNode }
>(function BlogNavItem({ children, ...restProps }, ref) {
  if (!React.Children.only(children) || !React.isValidElement(children)) {
    console.warn(
      "Please provide a single child react node for the BlogNavItem component"
    );
    return null;
  }

  return (
    <li className="blog-nav-item">
      <NavLink {...restProps} ref={ref}>
        {({ isActive }) =>
          React.cloneElement(children, {
            isActive,
          })
        }
      </NavLink>
    </li>
  );
});

BlogNavItem.links = createComponentStyle(styles);
