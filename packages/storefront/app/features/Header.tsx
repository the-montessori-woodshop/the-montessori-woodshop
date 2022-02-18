import {
  Icon,
  Navbar,
  NavbarAction,
  NavbarLinkList,
  NavbarLinkListItem,
  NavbarLogo,
  NavbarSection,
} from "@woodshop/components";
import { ShoppingCart, UserCircle } from "@woodshop/icons";
import { NavbarLink } from "~/components/NavbarLink";
import { FC, memo } from "react";

import { HeaderAccount } from "./HeaderAccount";
import { HeaderCart } from "./HeaderCart";

export const Header: FC = memo(function Header() {
  return (
    <header>
      <Navbar>
        <NavbarSection>
          <NavbarLogo src="/logo.png" alt="logo" />
        </NavbarSection>
        <NavbarSection cxMain>
          <NavbarLinkList>
            <NavbarLinkListItem>
              <NavbarLink to="/">Home</NavbarLink>
            </NavbarLinkListItem>
            <NavbarLinkListItem>
              <NavbarLink to="/mission">Mission</NavbarLink>
            </NavbarLinkListItem>
            <NavbarLinkListItem>
              <NavbarLink to="/shop">Shop</NavbarLink>
            </NavbarLinkListItem>
            <NavbarLinkListItem>
              <NavbarLink to="/blog">Blog</NavbarLink>
            </NavbarLinkListItem>
          </NavbarLinkList>
        </NavbarSection>
        <NavbarSection>
          <HeaderCart />
          <HeaderAccount />
        </NavbarSection>
      </Navbar>
    </header>
  );
});
