import { LoaderFunction } from "@remix-run/cloudflare";
import type { GET_ImagesApiResponse } from "@woodshop/api";
import { Breadcrumb } from "~/components/breadcrumb/Breadcrumb";
import { AppImages } from "~/features/app.images";
import { api } from "~/services/api.server";

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

export default AppImages;
