import { makeRem, ButtonGroup, ButtonContent } from "@woodshop/components";
import { PageTitle } from "~/components/PageTitle";
import styled from "styled-components";
import {
  type LoaderFunction,
  Outlet,
  useLoaderData,
  NavLink,
  Link,
} from "remix";
import { ImagesGrid } from "~/components/ImagesGrid";
import { ImagesGridMainTitle } from "~/components/ImagesGridMainTitle";
import { ImagesGridMainContent } from "~/components/ImagesGridMainContent";
import clsx from "clsx";
import { api } from "~/services/api.server";
import type { GET_ImagesApiResponse } from "@woodshop/api";
import { PageHeader } from "~/components/PageHeader";
import { Breadcrumb } from "~/components/Breadcrumb";

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
  s &.active {
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

export const handle = {
  breadcrumb: () => {
    return (
      <Breadcrumb to="/images" end>
        Images
      </Breadcrumb>
    );
  },
};

export const loader: LoaderFunction = async ({ request }) => {
  const response = await api.get<GET_ImagesApiResponse>({
    headers: request.headers,
    url: "/image",
  });
  return response;
};

export default function ImageGalleryRoute() {
  const data = useLoaderData<GET_ImagesApiResponse>();

  return (
    <ImagesGrid>
      <ImagesGridMainTitle>
        <PageHeader>
          <PageTitle>Images</PageTitle>
          <SDiv5>
            <ButtonGroup cxLayout="inline">
              <Link to="new">
                <ButtonContent
                  cxVariant="contained"
                  cxColor="primary"
                  cxSize="small"
                >
                  New Image
                </ButtonContent>
              </Link>
            </ButtonGroup>
          </SDiv5>
        </PageHeader>
      </ImagesGridMainTitle>
      <ImagesGridMainContent>
        <SUl>
          {data.map((img) => (
            <SLi key={img.id}>
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
