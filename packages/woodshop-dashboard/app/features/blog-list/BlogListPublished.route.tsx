import { useLoaderData } from "@remix-run/react";
import type {
  GET_PostsApiResponse,
  GET_PostsApiSearchParams,
} from "@woodshop/api";
import { Breadcrumb } from "~/components/breadcrumb";
import { api } from "~/features/api/api.server";
import { Page, PageBody, PageHeader, PageHeaderTitle } from "~/features/page";
import type { RemixFeatureUIRoute } from "~/types/routes.types";
import type { UseMatchesMatch } from "~/types/useMatches";

import { BlogNewPostButton } from "./BlogNewPostButton";
import { BlogPostList } from "./BlogPostList";

export const BlogListRoutePublished: RemixFeatureUIRoute = () => {
  const data = useLoaderData<GET_PostsApiResponse>();

  return (
    <Page>
      <PageHeader>
        <PageHeaderTitle>Published</PageHeaderTitle>
        <BlogNewPostButton />
      </PageHeader>
      <PageBody>
        <BlogPostList data={data} />
      </PageBody>
    </Page>
  );
};

BlogListRoutePublished.loader = async ({ request }) => {
  try {
    const response = await api.get<
      GET_PostsApiResponse,
      undefined,
      GET_PostsApiSearchParams
    >({
      headers: request.headers,
      url: "/post",
      search: {
        published: true,
      },
    });
    return response;
  } catch (error) {}
};

BlogListRoutePublished.handle = {
  breadcrumb: (data: UseMatchesMatch) => {
    return (
      <Breadcrumb to="/blog/published" end>
        Published
      </Breadcrumb>
    );
  },
};
