import { ShoppingCart, UserCircle } from "@woodshop/icons";
import React from "react";

import { Icon } from "../../atoms/Icon";
import { Navbar } from "./Navbar";
import { NavbarAction } from "./NavbarAction";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarSection } from "./NavbarSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms / Navbar"
};

export const Base = () => {
  return (
    <Navbar>
      <NavbarSection>
        <NavbarLogo src="/logo.png" alt="logo" />
      </NavbarSection>
      <NavbarSection cxMain>
        {/* <NavbarLinks>
          <NavbarLinkItem>
            <NavbarLinkText>Home</NavbarLinkText>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavbarLinkText>Mission</NavbarLinkText>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavbarLinkText>Shop</NavbarLinkText>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavbarLinkText>Blog</NavbarLinkText>
          </NavbarLinkItem>
        </NavbarLinks> */}
      </NavbarSection>
      <NavbarSection>
        <NavbarAction>
          <Icon cxTitle="shopping-cart">
            <ShoppingCart />
          </Icon>
        </NavbarAction>
        <NavbarAction>
          <Icon cxTitle="account">
            <UserCircle />
          </Icon>
        </NavbarAction>
      </NavbarSection>
    </Navbar>
  );
};
