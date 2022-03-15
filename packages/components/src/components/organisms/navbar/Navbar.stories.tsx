import { ShoppingCart, UserCircle } from "@woodshop/icons";
import React from "react";

import { Icon } from "../../atoms/icons-illustrations/Icon";
import { Navbar } from "./Navbar";
import { NavbarAction } from "./NavbarAction";
import { NavbarLinkList } from "./NavbarLinkList";
import { NavbarLinkListItem } from "./NavbarLinkListItem";
import { NavbarLinkListItemText } from "./NavbarLinkListItemText";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarSection } from "./NavbarSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms / Navbar"
};

export const WithoutLinks = () => {
  return (
    <Navbar>
      <NavbarSection>
        <NavbarLogo src="/logo.png" alt="logo" />
      </NavbarSection>
      <NavbarSection cxMain></NavbarSection>
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

export const WithLinks = () => {
  return (
    <Navbar>
      <NavbarSection>
        <NavbarLogo src="/logo.png" alt="logo" />
      </NavbarSection>
      <NavbarSection cxMain>
        <NavbarLinkList>
          <NavbarLinkListItem>
            <NavbarLinkListItemText>Home</NavbarLinkListItemText>
          </NavbarLinkListItem>
          <NavbarLinkListItem>
            <NavbarLinkListItemText>Mission</NavbarLinkListItemText>
          </NavbarLinkListItem>
          <NavbarLinkListItem>
            <NavbarLinkListItemText active>Shop</NavbarLinkListItemText>
          </NavbarLinkListItem>
          <NavbarLinkListItem>
            <NavbarLinkListItemText>Blog</NavbarLinkListItemText>
          </NavbarLinkListItem>
        </NavbarLinkList>
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
