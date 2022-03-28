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
import { PageTitle } from "~/components/PageTitle";
import { useCallback } from "react";
import styled from "styled-components";
import {
  type LoaderFunction,
  Outlet,
  useNavigate,
  useLoaderData,
  NavLink,
} from "remix";
import api, { ApiResponse } from "~/api/index";
import { ImagesGrid } from "~/components/ImagesGrid";
import { ImagesGridNav } from "~/components/ImagesGridNav";
import { ImagesGridMainTitle } from "~/components/ImagesGridMainTitle";
import { ImagesGridMainContent } from "~/components/ImagesGridMainContent";
import clsx from "clsx";

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
  width: 100%;
  height: ${makeRem(200)};
  object-fit: cover;
  border-radius: ${makeRem(4)};
  transition: all 0.15s ease-in-out;

  &.active {
    box-shadow: 0 2px 14px 5px var(--color-secondary);
    border: ${makeRem(2)} solid var(--color-secondary);
    transform: scale(1.1);
  }
`;

const SUl = styled.ul`
  display: grid;
  grid-template-columns: ${`repeat(auto-fill, minmax(${makeRem(280)}, 1fr))`};
  width: 100%;
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
              <NavLink to={`./${img.id}`}>
                {({ isActive }) => (
                  <SImg
                    src={img.url}
                    alt={img.title}
                    className={clsx(isActive && "active")}
                  />
                )}
              </NavLink>
            </SLi>
          ))}
        </SUl>
      </ImagesGridMainContent>
      <Outlet />
    </ImagesGrid>
  );
}
