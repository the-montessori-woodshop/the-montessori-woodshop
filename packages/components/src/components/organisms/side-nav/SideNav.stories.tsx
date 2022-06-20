import {
  Comment,
  Desktop3,
  EditSquareFeather,
  ImageGallery,
  SignOut
} from "@woodshop/icons";
import React from "react";

import { Icon } from "../../atoms/icons-illustrations/Icon";
import { SideNav } from "./SideNav";
import { SideNavList } from "./SideNavList";
import { SideNavListItem } from "./SideNavListItem";
import { SideNavListItemContent } from "./SideNavListItemContent";
import { SideNavLogo } from "./SideNavLogo";
import { SideNavSection } from "./SideNavSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms / Sidenav"
};

export const WithoutLinks = () => {
  return (
    <SideNav>
      <SideNavSection>
        <SideNavList>
          <SideNavListItem>
            <SideNavListItemContent className="logo">
              <SideNavLogo src="/logo-512x512-transparent.png" alt="woodshop" />
            </SideNavListItemContent>
          </SideNavListItem>
          <SideNavListItem>
            <SideNavListItemContent>
              <Icon cxTitle="dashboard" cxSize={32}>
                <Desktop3 />
              </Icon>
            </SideNavListItemContent>
          </SideNavListItem>
          <SideNavListItem>
            <SideNavListItemContent>
              <Icon cxTitle="blog" cxSize={32}>
                <EditSquareFeather />
              </Icon>
            </SideNavListItemContent>
          </SideNavListItem>
          <SideNavListItem>
            <SideNavListItemContent isActive>
              <Icon cxTitle="reviews" cxSize={32}>
                <Comment />
              </Icon>
            </SideNavListItemContent>
          </SideNavListItem>
          <SideNavListItem>
            <SideNavListItemContent>
              <Icon cxTitle="images" cxSize={32}>
                <ImageGallery />
              </Icon>
            </SideNavListItemContent>
          </SideNavListItem>
        </SideNavList>
      </SideNavSection>
      <SideNavSection>
        <SideNavList>
          <SideNavListItem>
            <Icon cxTitle="sign-out" cxSize={32}>
              <SignOut />
            </Icon>
          </SideNavListItem>
        </SideNavList>
      </SideNavSection>
    </SideNav>
  );
};
