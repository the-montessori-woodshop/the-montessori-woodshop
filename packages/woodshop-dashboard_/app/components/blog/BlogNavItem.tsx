import type { NavLinkProps } from "@remix-run/react/dist";
import { NavLink } from "@remix-run/react/dist";
import type { ReactNode } from "react";
import React, { forwardRef } from "react";

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
