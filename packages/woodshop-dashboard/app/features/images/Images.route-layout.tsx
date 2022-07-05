import { Outlet, useLoaderData } from "@remix-run/react";
import type { GET_ImagesApiResponse } from "@woodshop/api";
import { Breadcrumb } from "~/components/breadcrumb";
import { api } from "~/features/api";
import { Page, PageBody, PageHeader, PageHeaderTitle } from "~/features/page";
import type { RemixFeatureUIRoute } from "~/types/routes.types";
import clsx from "clsx";

import { ImagesEmpty } from "./ImagesEmpty";

export const ImagesRouteLayout: RemixFeatureUIRoute = () => {
  const data = useLoaderData<GET_ImagesApiResponse>();

  return (
    <Page>
      <PageHeader>
        <PageHeaderTitle>Images</PageHeaderTitle>
      </PageHeader>
      <PageBody>
        <div className={clsx("nzKztTNu", "layout")}>
          <div className={clsx("nzKztTNu", "main")}>
            {data.length === 0 ? (
              <ImagesEmpty />
            ) : (
              <pre>{JSON.stringify(data, null, 4)}</pre>
            )}
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
  console.log(response);
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
