import {
  Button,
  Icon,
  TopNav,
  TopNavList,
  TopNavListItem,
  TopNavSection,
  makeRem,
} from "@woodshop/components";
import { Copy, PlusSquare, Share } from "@woodshop/icons";
import { PageContainer } from "~/components/PageContainer";
import { PageContent } from "~/components/PageContent";
import { PageTitle } from "~/components/PageTitle";
import { useCallback } from "react";
import { Outlet, useNavigate } from "remix";
import styled from "styled-components";

const SDiv = styled.div`
  display: flex;
  height: 100%;
`;

const SDiv2 = styled.div`
  flex: 1;
`;

const SDiv3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SDiv4 = styled.div`
  padding: 0 ${makeRem(32)};
`;

const SDiv5 = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function ImageGalleryRoute() {
  const navigate = useNavigate();

  const createNewImage = useCallback(() => navigate("new"), [navigate]);
  return (
    <>
      <TopNav>
        <TopNavSection>
          <TopNavList>
            <TopNavListItem>Image Gallery</TopNavListItem>
          </TopNavList>
        </TopNavSection>
      </TopNav>
      <PageContainer>
        <SDiv>
          <SDiv2>
            <SDiv3>
              <PageTitle>Images</PageTitle>
              <SDiv4>
                <SDiv5>
                  <Button>
                    <Icon cxTitle="share">
                      <Copy />
                    </Icon>
                  </Button>
                  <Button onClick={createNewImage}>
                    <Icon cxTitle="add a new image">
                      <PlusSquare />
                    </Icon>
                  </Button>
                </SDiv5>
              </SDiv4>
            </SDiv3>
            <PageContent>
              <SDiv>
                <div>image area</div>
              </SDiv>
            </PageContent>
          </SDiv2>
          <Outlet />
        </SDiv>
      </PageContainer>
    </>
  );
}
