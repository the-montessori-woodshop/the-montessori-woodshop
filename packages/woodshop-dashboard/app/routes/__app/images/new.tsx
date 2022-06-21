import type { ActionFunction } from "@remix-run/cloudflare";
import type { POST_NewImageApiResponse } from "@woodshop/api";
import { Breadcrumb } from "~/components/Breadcrumb";
import { AppImagesNewRoute } from "~/features/app.images-new";
import { api } from "~/services/api.server";
import { redirect } from "@remix-run/cloudflare";

export const links = AppImagesNewRoute.links;

export const handle = {
  breadcrumb: () => {
    return <Breadcrumb to="/images/new">New</Breadcrumb>;
  },
};

export const action: ActionFunction = async ({ request }) => {
  const data = await api.postFormData<POST_NewImageApiResponse>(
    "/image",
    request
  );
  return redirect(`/images/${data.id}`);
};

export default AppImagesNewRoute;
