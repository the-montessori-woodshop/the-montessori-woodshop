import { useLoaderData } from "@remix-run/react";
import type {
  GET_PostsApiResponse,
  GET_PostsApiSearchParams,
} from "@woodshop/api";
import { Breadcrumb } from "~/components/breadcrumb";
import { PageHeader } from "~/components/page/PageHeader";
import { api } from "~/features/api/api.server";
import { Page, PageBody, PageHeaderTitle } from "~/features/page";
import type { RemixFeatureUIRoute } from "~/types/routes.types";
import type { UseMatchesMatch } from "~/types/useMatches";

import { BlogNewPostButton } from "./BlogNewPostButton";
import { BlogPostList } from "./BlogPostList";

export const BlogListRouteDrafts: RemixFeatureUIRoute = () => {
  const data = useLoaderData<GET_PostsApiResponse>();

  return (
    <Page>
      <PageHeader>
        <PageHeaderTitle>Drafts</PageHeaderTitle>
        <BlogNewPostButton />
      </PageHeader>
      <PageBody>
        <BlogPostList data={data} />
      </PageBody>
    </Page>
  );
};

BlogListRouteDrafts.loader = async ({ request }) => {
  try {
    const response = await api.get<
      GET_PostsApiResponse,
      undefined,
      GET_PostsApiSearchParams
    >({
      headers: request.headers,
      url: "/post",
      search: {
        published: false,
      },
    });
    return response;
  } catch (error) {}
};

BlogListRouteDrafts.handle = {
  breadcrumb: (data: UseMatchesMatch) => {
    return (
      <Breadcrumb to="/blog/drafts" end>
        Drafts
      </Breadcrumb>
    );
  },
};
