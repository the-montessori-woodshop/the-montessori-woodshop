import {
  Icon,
  SideNav,
  SideNavList,
  SideNavListItem,
  SideNavListItemContent,
  SideNavLogo,
  SideNavSection,
} from "@woodshop/components";
// @ts-ignore
import stylesUrl from "@woodshop/components/css";
import fontBitterUrl from "@woodshop/components/fonts/bitter.css";
import fontOpenSansUrl from "@woodshop/components/fonts/open-sans.css";
import {
  Comment,
  Desktop3,
  EditSquareFeather,
  ImageGallery,
  SignOut,
} from "@woodshop/icons";
import { FC } from "react";
import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  NavLink,
  NavLinkProps,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styled from "styled-components";

import rootUrl from "./root.css";

export const meta: MetaFunction = () => {
  return { title: "Dashboard | The Montessory Woodshop" };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    { rel: "stylesheet", href: rootUrl },
    { rel: "stylesheet", href: fontBitterUrl },
    { rel: "stylesheet", href: fontOpenSansUrl },
  ];
};

const SContent = styled.main`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SideNavListItemLink: FC<NavLinkProps> = ({ children, ...restProps }) => {
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

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
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
              <SideNavListItemLink to="/image-gallery">
                <Icon cxTitle="images" cxSize={32}>
                  <ImageGallery />
                </Icon>
              </SideNavListItemLink>
            </SideNavList>
          </SideNavSection>
          <SideNavSection>
            <SideNavList>
              <SideNavListItem>
                <SideNavListItemContent>
                  <Icon cxTitle="sign-out" cxSize={32}>
                    <SignOut />
                  </Icon>
                </SideNavListItemContent>
              </SideNavListItem>
            </SideNavList>
          </SideNavSection>
        </SideNav>
        <SContent>
          <Outlet />
        </SContent>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
