import {
  Navbar,
  NavbarLinkList,
  NavbarLinkListItem,
  NavbarLogo,
  NavbarSection,
  makeRem,
} from "@woodshop/components";
import { NavbarLink } from "~/components/NavbarLink";
import type { FC} from "react";
import { memo, useMemo } from "react";
import { Link } from "remix";
import styled from "styled-components";

import { CheckoutSummaryDrawer } from "./checkout/CheckoutSummaryDrawer";
import { HeaderAccount } from "./HeaderAccount";
import { HeaderCart } from "./HeaderCart";
import { useIsCheckout } from "./useIsCheckout";

const SHeaderCheckout = styled.header`
  height: ${makeRem(48)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-grey2);
  width: 100%;
  padding: 0 ${makeRem(16)};

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & + * {
    height: ${`calc(100vh - ${makeRem(48)})`};
    min-height: ${`calc(100vh - ${makeRem(48)})`};
  }
`;

const SHeaderMain = styled.header`
  & + * {
    padding-top: var(--navbar-height);
  }
`;

export const Header: FC = memo(function Header() {
  const isCheckout = useIsCheckout();

  const HeaderComponent = useMemo(() => {
    return (
      <SHeaderMain>
        <Navbar>
          <NavbarSection>
            <NavbarLogo src="/logo-512x512-transparent.png" alt="logo" />
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
      </SHeaderMain>
    );
  }, []);

  if (isCheckout) {
    return (
      <SHeaderCheckout>
        <Link to="/">
          <img
            src="/logo-512x512-transparent.png"
            alt="logo"
            style={{
              height: makeRem(38),
              width: makeRem(38),
            }}
          />
        </Link>
        <CheckoutSummaryDrawer />
      </SHeaderCheckout>
    );
  }

  return <>{HeaderComponent}</>;
});
