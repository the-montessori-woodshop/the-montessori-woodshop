import {
  TopNav,
  TopNavList,
  TopNavListItem,
  TopNavSection,
  makeRem,
} from "@woodshop/components";
import { Outlet } from "remix";
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

export default function BlogRoute() {
  return (
    <>
      <TopNav>
        <TopNavSection>
          <TopNavList>
            <TopNavListItem>left</TopNavListItem>
          </TopNavList>
        </TopNavSection>
      </TopNav>
      <SGrid>
        <SArticle>test</SArticle>
        <SSection>
          <Outlet />
        </SSection>
      </SGrid>
    </>
  );
}
