import {
  Icon,
  SideNav,
  SideNavList,
  SideNavListItem,
  SideNavListItemContent,
  SideNavLogo,
  SideNavSection,
} from "@woodshop/components";
import {
  Comment,
  Desktop3,
  EditSquareFeather,
  ImageGallery,
  SignOut,
} from "@woodshop/icons";
import type { FC } from "react";

import { AppLayoutSideNavListItem } from "./AppLayoutSideNavListItem";

export const AppLayoutSideNav: FC = () => {
  return (
    <SideNav>
      <SideNavSection>
        <SideNavList>
          <SideNavListItem>
            <SideNavListItemContent>
              <SideNavLogo src="/logo-512x512-transparent.png" alt="woodshop" />
            </SideNavListItemContent>
          </SideNavListItem>

          <AppLayoutSideNavListItem to="/">
            <Icon cxTitle="dashboard" cxSize={32}>
              <Desktop3 />
            </Icon>
          </AppLayoutSideNavListItem>
          <AppLayoutSideNavListItem to="/blog">
            <Icon cxTitle="blog" cxSize={32}>
              <EditSquareFeather />
            </Icon>
          </AppLayoutSideNavListItem>
          <AppLayoutSideNavListItem to="reviews">
            <Icon cxTitle="reviews" cxSize={32}>
              <Comment />
            </Icon>
          </AppLayoutSideNavListItem>
          <AppLayoutSideNavListItem to="/images">
            <Icon cxTitle="images" cxSize={32}>
              <ImageGallery />
            </Icon>
          </AppLayoutSideNavListItem>
        </SideNavList>
      </SideNavSection>
      <SideNavSection>
        <SideNavList>
          <AppLayoutSideNavListItem to="/sign-out">
            <Icon cxTitle="logout" cxSize={32}>
              <SignOut />
            </Icon>
          </AppLayoutSideNavListItem>
        </SideNavList>
      </SideNavSection>
    </SideNav>
  );
};
