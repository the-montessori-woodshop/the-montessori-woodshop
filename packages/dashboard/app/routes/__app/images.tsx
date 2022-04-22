import { ButtonGroup, ButtonContent } from "@woodshop/components";
import type { LinksFunction } from "@remix-run/cloudflare";
import {
  type LoaderFunction,
  Outlet,
  useLoaderData,
  NavLink,
  Link,
} from "remix";
import { PageHeader } from "~/components/page/PageHeader";
import { PageTitle } from "~/components/page/PageTitle";
import { ImagesGrid } from "~/components/images/ImagesGrid";
import { ImagesGridMainTitle } from "~/components/images/ImagesGridMainTitle";
import { ImagesGridMainContent } from "~/components/images/ImagesGridMainContent";
import { Breadcrumb } from "~/components/Breadcrumb";

import clsx from "clsx";
import { api } from "~/services/api.server";
import type { GET_ImagesApiResponse } from "@woodshop/api";

import imagesStyles from "./images.css";
import { createRouteLinkStyles } from "~/features/routes/routes.createRouteLinkStyles";

export const links: LinksFunction = () => [
  PageHeader.links,
  PageTitle.links,
  createRouteLinkStyles(imagesStyles),
];

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
          <div className="toolbar">
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
          </div>
        </PageHeader>
      </ImagesGridMainTitle>
      <ImagesGridMainContent>
        <ul className="list">
          {data.map((img) => (
            <li key={img.id}>
              <NavLink to={`./${img.id}`}>
                {({ isActive }) => (
                  <img
                    src={img.url}
                    alt={img.title}
                    className={clsx(isActive && "active", "img")}
                  />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </ImagesGridMainContent>
      <Outlet />
    </ImagesGrid>
  );
}
