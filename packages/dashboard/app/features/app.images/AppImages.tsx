import { Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";
import type { GET_ImagesApiResponse } from "@woodshop/api";
import { ButtonContent, ButtonGroup } from "@woodshop/components";
import clsx from "clsx";
import { ImagesGrid } from "components/ImagesGrid";
import { ImagesGridMainContent } from "components/ImagesGridMainContent";
import { ImagesGridMainTitle } from "components/ImagesGridMainTitle";
import { PageHeader } from "components/PageHeader";
import { PageTitle } from "components/PageTitle";

import { createRouteLinkStyles } from "../routes/routes.createRouteLinkStyles";
import type { RemixFeatureRoute } from "../routes/routes.types";
import routeStyles from "./AppImages.css";

export const AppImages: RemixFeatureRoute = () => {
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
};

AppImages.links = () => [
  PageHeader.links,
  PageTitle.links,
  createRouteLinkStyles(routeStyles),
];
