import type { ActionFunction } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/cloudflare";
import type { POST_NewImageApiResponse } from "@woodshop/api";
import { Breadcrumb } from "~/components/breadcrumb/Breadcrumb";
import { api } from "~/features/api/api.server";
import { AppImagesNewRoute } from "~/features/images-new";

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
