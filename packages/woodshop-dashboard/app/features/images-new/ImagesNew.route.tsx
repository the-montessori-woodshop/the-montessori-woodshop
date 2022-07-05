import { redirect } from "@remix-run/cloudflare";
import type { POST_NewImageApiResponse } from "@woodshop/api";
import { Breadcrumb } from "~/components/breadcrumb";
import { api } from "~/features//api";
import type { RemixFeatureUIRoute } from "~/types/routes.types";

import { PageBody, PageHeader, PageHeaderTitle } from "../page";

export const ImagesNewRoute: RemixFeatureUIRoute = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderTitle>Upload a New Image</PageHeaderTitle>
      </PageHeader>
      <PageBody>stuff</PageBody>
    </>
  );
};

ImagesNewRoute.handle = {
  breadcrumb: () => {
    return <Breadcrumb to="/images/new">New</Breadcrumb>;
  },
};

ImagesNewRoute.action = async ({ request }) => {
  const data = await api.postFormData<POST_NewImageApiResponse>(
    "/image",
    request
  );
  return redirect(`/images/${data.id}`);
};
