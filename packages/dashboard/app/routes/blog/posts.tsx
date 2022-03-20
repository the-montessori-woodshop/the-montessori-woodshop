import { Tab, TabText, Tablist, makeRem } from "@woodshop/components";
import { FC } from "react";
import { NavLink, NavLinkProps, Outlet } from "remix";
import styled from "styled-components";

const SGrid = styled.div`
  display: grid;
  grid-template-columns: ${makeRem(300)} 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  width: 100%;
`;

const SArticle = styled.article`
  display: flex;
  flex-direction: column;
  background: var(--color-grey2);
  width: 100%;
  padding: ${makeRem(24)} ${makeRem(32)};
`;

const SSection = styled.section`
  padding: ${makeRem(24)};
`;

const SDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TabLink: FC<NavLinkProps> = ({ to, children, ...restProps }) => {
  return (
    <NavLink to={to} {...restProps}>
      {({ isActive }) => <Tab isActive={isActive}>{children}</Tab>}
    </NavLink>
  );
};

export default function BlogIndexPage() {
  return (
    <SGrid>
      <SArticle>
        <Tablist ariaLabel="testing" cxLayout="vertical" cxSize="lg">
          <TabLink to="/blog/posts" end>
            <SDiv>
              <TabText>All Posts</TabText>
              <TabText>20</TabText>
            </SDiv>
          </TabLink>
          <TabLink to="/blog/posts/drafts">
            <SDiv>
              <TabText>Draft</TabText>
              <TabText>4</TabText>
            </SDiv>
          </TabLink>
          <TabLink to="/blog/posts/published">
            <SDiv>
              <TabText>Published</TabText>
              <TabText>16</TabText>
            </SDiv>
          </TabLink>
        </Tablist>
      </SArticle>
      <SSection>
        <Outlet />
      </SSection>
    </SGrid>
  );
}
