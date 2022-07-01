import {
  TopNavListItem,
  TypographyHeading,
  makeRem,
} from "@woodshop/components";
import type { FC, ReactNode } from "react";
import { forwardRef } from "react";
import type { NavLinkProps } from "@remix-run/react";
import { NavLink } from "@remix-run/react";

export const BreadcrumbSeparator: FC = () => {
  return (
    <TopNavListItem
      style={{
        margin: `0 ${makeRem(8)}`,
      }}
    >
      <BreadcrumbText>&nbsp;/&nbsp;</BreadcrumbText>
    </TopNavListItem>
  );
};

export const BreadcrumbText: FC<{
  isActive?: boolean;
  children: ReactNode;
}> = ({ isActive = false, children }) => {
  return (
    <TypographyHeading
      cxNode="div"
      cxVariant="h6"
      style={{
        margin: 0,
        fontWeight: 600,
        color: isActive ? "var(--color-black)" : "var(--color-grey4)",
      }}
    >
      {children}
    </TypographyHeading>
  );
};

export const Breadcrumb = forwardRef<
  HTMLAnchorElement,
  NavLinkProps & { children: ReactNode }
>(function Breadcrumb({ children, ...restProps }, ref) {
  return (
    <TopNavListItem>
      <NavLink {...restProps} ref={ref}>
        {({ isActive }) => (
          <BreadcrumbText isActive={isActive}>{children}</BreadcrumbText>
        )}
      </NavLink>
    </TopNavListItem>
  );
});
