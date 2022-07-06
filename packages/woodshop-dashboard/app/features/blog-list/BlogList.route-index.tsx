import { useLoaderData } from "@remix-run/react";
import type { GET_PostsApiResponse } from "@woodshop/api";
import { api } from "~/features/api/api.server";
import { Page, PageBody, PageHeader, PageHeaderTitle } from "~/features/page";
import type { RemixFeatureUIRoute } from "~/types/routes.types";

import { BlogNewPostButton } from "./BlogNewPostButton";
import { BlogPostList } from "./BlogPostList";

export const BlogListRouteIndex: RemixFeatureUIRoute = () => {
  const data = useLoaderData<GET_PostsApiResponse>();

  return (
    <Page>
      <PageHeader>
        <PageHeaderTitle>All Posts</PageHeaderTitle>
        <BlogNewPostButton />
      </PageHeader>
      <PageBody>
        <BlogPostList data={data} />
      </PageBody>
    </Page>
  );
};

BlogListRouteIndex.loader = async ({ request }) => {
  try {
    const response = await api.get<GET_PostsApiResponse>({
      headers: request.headers,
      url: "/post",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
