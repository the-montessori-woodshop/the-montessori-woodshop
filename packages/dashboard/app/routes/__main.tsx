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
import { authenticator } from "~/services/auth.server";
import { FC } from "react";
import { LoaderFunction, NavLink, NavLinkProps, Outlet } from "remix";
import styled from "styled-components";

const SContent = styled.main`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const loader: LoaderFunction = async ({ request }) => {
  return authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

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

export default function LayoutRoute() {
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
      <SContent>
        <Outlet />
      </SContent>
    </>
  );
}
