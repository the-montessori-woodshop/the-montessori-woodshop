import type { NavLinkProps } from "@remix-run/react/dist";
import { NavLink } from "@remix-run/react/dist";
import { Tab } from "@woodshop/components";
import type { ReactNode } from "react";
import { forwardRef } from "react";

export const TabLink = forwardRef<
  HTMLAnchorElement,
  NavLinkProps & { children: ReactNode }
>(function TabLink({ children, ...restProps }, ref) {
  return (
    <NavLink {...restProps} ref={ref}>
      {({ isActive }) => <Tab isActive={isActive}>{children}</Tab>}
    </NavLink>
  );
});
