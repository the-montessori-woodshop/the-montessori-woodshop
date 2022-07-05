import { useLoaderData } from "@remix-run/react";
import type { GET_ImagesApiResponse } from "@woodshop/api";
import { api } from "~/features/api";
import { PageBody, PageHeader, PageHeaderTitle } from "~/features/page";
import type { RemixFeatureUIRoute } from "~/types/routes.types";

import { ImagesIndexEmpty } from "./ImagesIndexEmpty";

export const ImagesRouteIndex: RemixFeatureUIRoute = () => {
  const data = useLoaderData<GET_ImagesApiResponse>();

  return (
    <>
      <PageHeader>
        <PageHeaderTitle>Images</PageHeaderTitle>
      </PageHeader>
      <PageBody>
        {data.length === 0 ? (
          <ImagesIndexEmpty />
        ) : (
          <pre>{JSON.stringify(data, null, 4)}</pre>
        )}
      </PageBody>
    </>
  );
};

ImagesRouteIndex.loader = async ({ request }) => {
  const response = await api.get<GET_ImagesApiResponse>({
    headers: request.headers,
    url: "/image",
  });
  console.log(response);
  return response;
};
