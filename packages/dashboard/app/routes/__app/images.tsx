import { type LoaderFunction } from "remix";
import { Breadcrumb } from "~/components/Breadcrumb";
import { api } from "~/services/api.server";
import type { GET_ImagesApiResponse } from "@woodshop/api";
import { AppImages } from "~/features/app.images";

export const links = AppImages.links;

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
