import { TypographyCopy, makeRem } from "@woodshop/components";
import clsx from "clsx";
import React, { ReactNode, forwardRef } from "react";
import { NavLink, NavLinkProps } from "remix";
import styled from "styled-components";

export const BlogNav = styled.ul``;
export const SBlogNavItem = styled.li`
  margin-bottom: ${makeRem(8)};
`;

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
    <SBlogNavItem>
      <NavLink {...restProps} ref={ref}>
        {({ isActive }) =>
          React.cloneElement(children, {
            isActive,
          })
        }
      </NavLink>
    </SBlogNavItem>
  );
});

export const SBlogNavItemContent = styled.div`
  height: ${makeRem(54)};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 ${makeRem(16)};
  border-radius: ${makeRem(4)};
  text-transform: capitalize;

  &.active {
    background: var(--color-grey3);
    * {
      font-weight: 600 !important;
    }
  }
`;

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
    <SBlogNavItemContent
      {...restProps}
      className={clsx(className, {
        active: isActive,
      })}
      ref={ref}
    >
      <TypographyCopy>{children}</TypographyCopy>
    </SBlogNavItemContent>
  );
});
