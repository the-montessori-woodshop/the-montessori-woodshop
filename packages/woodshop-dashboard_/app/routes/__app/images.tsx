import type { LoaderFunction } from "@remix-run/cloudflare/dist";
import type { GET_ImagesApiResponse } from "@woodshop/api";
import { Breadcrumb } from "~/components/breadcrumb/Breadcrumb";
import { api } from "~/features/api/api.server";
import { AppImages } from "~/features/images";

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
