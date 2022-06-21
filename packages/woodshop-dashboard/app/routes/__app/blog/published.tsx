import type {
  GET_PostsApiResponse,
  GET_PostsApiSearchParams,
} from "@woodshop/api";
import { BlogNewPostButton } from "~/components/blog/BlogNewPostButton";
import { BlogPostList } from "~/components/blog/BlogPostsList";
import { Breadcrumb } from "~/components/Breadcrumb";
import { PageContainer } from "~/components/PageContainer";
import { PageContent } from "~/components/PageContent";
import { PageHeader } from "~/components/PageHeader";
import { PageTitle } from "~/components/PageTitle";
import { api } from "~/services/api.server";
import type { UseMatchesMatch } from "~/types/useMatches";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
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

export const handle = {
  breadcrumb: (data: UseMatchesMatch) => {
    return (
      <Breadcrumb to="/blog/published" end>
        Published
      </Breadcrumb>
    );
  },
};

export default function BlogIndexPage() {
  const data = useLoaderData<GET_PostsApiResponse>();

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Published</PageTitle>
        <BlogNewPostButton />
      </PageHeader>
      <PageContent>
        <BlogPostList data={data} />
      </PageContent>
    </PageContainer>
  );
}
