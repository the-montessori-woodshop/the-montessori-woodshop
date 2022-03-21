import {
  Button,
  Icon,
  TopNav,
  TopNavList,
  TopNavListItem,
  TopNavSection,
  makeRem,
} from "@woodshop/components";
import { Copy, PlusSquare } from "@woodshop/icons";
import { PageContainer } from "~/components/PageContainer";
import { PageContent } from "~/components/PageContent";
import { PageTitle } from "~/components/PageTitle";
import { useCallback, useMemo } from "react";
import styled from "styled-components";
import { type LoaderFunction, Outlet, useNavigate, useLoaderData } from "remix";
import api, { ApiResponse } from "~/api/index";
import { ImagesGrid } from "~/components/ImagesGrid";
import { ImagesGridNav } from "~/components/ImagesGridNav";
import { ImagesGridMainTitle } from "~/components/ImagesGridMainTitle";
import { ImagesGridMainContent } from "~/components/ImagesGridMainContent";

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

const SImg = styled.img`
  width: ${makeRem(300)};
  height: ${makeRem(200)};
  border-radius: ${makeRem(4)};
`;

const SUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: ;
`;

const SLi = styled.li`
  margin: ${makeRem(16)};
`;

export const loader: LoaderFunction = async () => {
  const images = await api.image.getImages();
  return images;
};

export default function ImageGalleryRoute() {
  const navigate = useNavigate();
  const { data } = useLoaderData<ApiResponse<typeof api.image.getImages>>();

  const createNewImage = useCallback(() => navigate("new"), [navigate]);

  return (
    <ImagesGrid>
      <ImagesGridNav>
        <TopNav>
          <TopNavSection>
            <TopNavList>
              <TopNavListItem>Image Gallery</TopNavListItem>
            </TopNavList>
          </TopNavSection>
        </TopNav>
      </ImagesGridNav>
      <ImagesGridMainTitle>
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
      </ImagesGridMainTitle>
      <ImagesGridMainContent>
        <SUl>
          {data.map((img) => (
            <SLi key={img.service_id}>
              <SImg src={img.url} alt={img.title} />
            </SLi>
          ))}
        </SUl>
      </ImagesGridMainContent>
      <Outlet />
    </ImagesGrid>
  );
}
