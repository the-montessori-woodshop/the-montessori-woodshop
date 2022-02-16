import { RemixNavLinkProps } from "@remix-run/react/components";
import { NavbarLinkListItemText } from "@woodshop/components";
import { forwardRef } from "react";
import { NavLink } from "remix";

export const NavbarLink = forwardRef<HTMLAnchorElement, RemixNavLinkProps>(
  function NavbarLink({ children, ...restProps }, ref) {
    return (
      <NavLink {...restProps} ref={ref}>
        {({ isActive }) => (
          <NavbarLinkListItemText active={isActive}>
            {children}
          </NavbarLinkListItemText>
        )}
      </NavLink>
    );
  }
);
