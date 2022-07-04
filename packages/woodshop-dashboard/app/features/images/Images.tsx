import { Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";
import type { GET_ImagesApiResponse } from "@woodshop/api";
import { ButtonContent, ButtonGroup } from "@woodshop/components";
import { ImagesGrid } from "~/components/images/ImagesGrid";
import { ImagesGridMainContent } from "~/components/images/ImagesGridMainContent";
import { ImagesGridMainTitle } from "~/components/images/ImagesGridMainTitle";
import { PageHeader } from "~/components/page/PageHeader";
import { PageTitle } from "~/components/page/PageTitle";
import clsx from "clsx";

import type { RemixFeatureUIRoute } from "../../types/routes.types";

export const AppImages: RemixFeatureUIRoute = () => {
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

AppImages.links = () => [];
