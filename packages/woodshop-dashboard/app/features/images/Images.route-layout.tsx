import { Link, Outlet, useLoaderData } from "@remix-run/react";
import type { GET_ImagesApiResponse } from "@woodshop/api";
import { ButtonContent } from "@woodshop/components";
import { Breadcrumb } from "~/components/breadcrumb";
import { api } from "~/features/api";
import { Page, PageBody, PageHeader, PageHeaderTitle } from "~/features/page";
import type { RemixFeatureUIRoute } from "~/types/routes.types";
import clsx from "clsx";

import { ImageList } from "./ImageList";
import { ImagesEmpty } from "./ImagesEmpty";

export const ImagesRouteLayout: RemixFeatureUIRoute = () => {
  const data = useLoaderData<GET_ImagesApiResponse>();

  return (
    <Page>
      <PageHeader>
        <PageHeaderTitle>Images</PageHeaderTitle>
        <Link to="./new">
          <ButtonContent cxVariant="contained" cxColor="primary" cxSize="small">
            New Image
          </ButtonContent>
        </Link>
      </PageHeader>
      <PageBody>
        <div className={clsx("nzKztTNu", "layout")}>
          <div className={clsx("nzKztTNu", "main")}>
            {data.length === 0 ? <ImagesEmpty /> : <ImageList images={data} />}
          </div>
          <div className={clsx("nzKztTNu", "pane")}>
            <Outlet />
          </div>
        </div>
      </PageBody>
    </Page>
  );
};

ImagesRouteLayout.loader = async ({ request }) => {
  const response = await api.get<GET_ImagesApiResponse>({
    headers: request.headers,
    url: "/image",
  });
  return response;
};

ImagesRouteLayout.handle = {
  breadcrumb: () => {
    return (
      <Breadcrumb to="/images" end>
        Images
      </Breadcrumb>
    );
  },
};
