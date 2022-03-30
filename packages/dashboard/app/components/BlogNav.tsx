import { makeRem } from "@woodshop/components";
import clsx from "clsx";
import React, { ReactNode, forwardRef } from "react";
import { NavLink, NavLinkProps } from "remix";
import styled from "styled-components";

export const BlogNav = styled.ul``;
export const SBlogNavItem = styled.li``;

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
    <NavLink {...restProps} ref={ref}>
      {({ isActive }) =>
        React.cloneElement(children, {
          isActive,
        })
      }
    </NavLink>
  );
});

export const SBlogNavItemContent = styled.div`
  height: ${makeRem(54)};
  width: 100%;
  display: flex;
  align-items: center;
`;

export type BlogNavItemContentProps = JSX.IntrinsicElements["div"] & {
  isActive?: boolean;
};

export const BlogNavItemContent = forwardRef<
  HTMLDivElement,
  BlogNavItemContentProps
>(function BlogNavItemContent({ children, className, isActive }, ref) {
  return (
    <SBlogNavItemContent
      className={clsx(className, {
        active: isActive,
      })}
    >
      {children}
    </SBlogNavItemContent>
  );
});
