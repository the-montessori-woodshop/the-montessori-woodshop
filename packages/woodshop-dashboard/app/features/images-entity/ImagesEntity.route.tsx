import { redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type {
  GET_ImageByIdApiParams,
  GET_ImageByIdApiResponse,
  PATCH_ImagesApiParams,
  PATCH_ImagesApiRequest,
  PATCH_ImagesApiResponse,
} from "@woodshop/api";
import { Breadcrumb } from "~/components/breadcrumb/Breadcrumb";
import { api } from "~/features/api/api.server";
import type { RemixFeatureUIRoute } from "~/types/routes.types";
import type { UseMatchesMatch } from "~/types/useMatches";

import { PageBody, PageHeader, PageHeaderTitle } from "../page";

export const ImagesEntityRoute: RemixFeatureUIRoute = () => {
  const data = useLoaderData<PATCH_ImagesApiResponse | null>();

  if (data === null) {
    return <>Uh oh, we can't find that image</>;
  }

  return (
    <>
      <PageHeader>
        <PageHeaderTitle>{data.title}</PageHeaderTitle>
      </PageHeader>
      <PageBody>
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </PageBody>
    </>
  );
};

ImagesEntityRoute.action = async ({ request }) => {
  try {
    const formData = await request.formData();

    const data = await api.update<
      PATCH_ImagesApiResponse,
      PATCH_ImagesApiRequest,
      PATCH_ImagesApiParams
    >({
      url: "/image/:id",
      method: "PATCH",
      headers: request.headers,
      params: {
        id: formData.get("id") as string,
      },
      body: {
        title: formData.get("title") as string,
      },
    });
    return redirect(`/images/${data.id}`);
  } catch (error) {
    throw new Error(error as string);
  }
};

ImagesEntityRoute.handle = {
  breadcrumb: (match: UseMatchesMatch) => {
    return (
      <Breadcrumb to={`/images/${match?.params.id}`}>
        {match?.params.id}
      </Breadcrumb>
    );
  },
};

ImagesEntityRoute.loader = async ({ params, request }) => {
  try {
    const data = await api.get<
      GET_ImageByIdApiResponse,
      GET_ImageByIdApiParams
    >({
      headers: request.headers,
      url: "/image/:id",
      params: {
        id: params.id,
      },
    });

    return data;
  } catch (error) {
    return null;
  }
};
