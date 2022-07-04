import type { NavLinkProps } from "@remix-run/react";
import { NavLink } from "@remix-run/react";
import { SideNavListItem, SideNavListItemContent } from "@woodshop/components";
import type { FC, ReactNode } from "react";

export const AppLayoutSideNavListItem: FC<
  NavLinkProps & { children: ReactNode }
> = ({ children, ...restProps }) => {
  return (
    <SideNavListItem>
      <NavLink
        {...restProps}
        style={{
          width: "inherit",
          height: "inherit",
        }}
      >
        {({ isActive }) => (
          <SideNavListItemContent isActive={isActive}>
            {children}
          </SideNavListItemContent>
        )}
      </NavLink>
    </SideNavListItem>
  );
};
