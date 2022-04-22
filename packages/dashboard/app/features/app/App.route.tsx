import { Outlet } from "@remix-run/react";
import {
  Icon,
  SideNav,
  SideNavList,
  SideNavListItem,
  SideNavListItemContent,
  SideNavLogo,
  SideNavSection,
  TopNav,
  TopNavSection,
} from "@woodshop/components";
import {
  Comment,
  Desktop3,
  EditSquareFeather,
  ImageGallery,
  SignOut,
} from "@woodshop/icons";
import { TopNavBreadcrumb } from "components/TopNavBreadcrumb";

import { createRouteLinkStyles } from "../routes/routes.createRouteLinkStyles";
import type { RemixFeatureRoute } from "../routes/routes.types";
import routeStyles from "./App.css";
import { SideNavListItemLink } from "./AppSideNavListItem";

export const AppRoute: RemixFeatureRoute = () => {
  return (
    <>
      <SideNav>
        <SideNavSection>
          <SideNavList>
            <SideNavListItem>
              <SideNavListItemContent>
                <SideNavLogo
                  src="/logo-512x512-transparent.png"
                  alt="woodshop"
                />
              </SideNavListItemContent>
            </SideNavListItem>

            <SideNavListItemLink to="/">
              <Icon cxTitle="dashboard" cxSize={32}>
                <Desktop3 />
              </Icon>
            </SideNavListItemLink>
            <SideNavListItemLink to="/blog">
              <Icon cxTitle="blog" cxSize={32}>
                <EditSquareFeather />
              </Icon>
            </SideNavListItemLink>
            <SideNavListItemLink to="reviews">
              <Icon cxTitle="reviews" cxSize={32}>
                <Comment />
              </Icon>
            </SideNavListItemLink>
            <SideNavListItemLink to="/images">
              <Icon cxTitle="images" cxSize={32}>
                <ImageGallery />
              </Icon>
            </SideNavListItemLink>
          </SideNavList>
        </SideNavSection>
        <SideNavSection>
          <SideNavList>
            <SideNavListItemLink to="/auth/logout">
              <Icon cxTitle="logout" cxSize={32}>
                <SignOut />
              </Icon>
            </SideNavListItemLink>
          </SideNavList>
        </SideNavSection>
      </SideNav>
      <div className="content">
        <TopNav>
          <TopNavSection>
            <TopNavBreadcrumb />
          </TopNavSection>
        </TopNav>
        <Outlet />
      </div>
    </>
  );
};

AppRoute.links = () => [createRouteLinkStyles(routeStyles)];
