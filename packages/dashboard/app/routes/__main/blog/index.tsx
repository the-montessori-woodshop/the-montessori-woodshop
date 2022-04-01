import type { GET_PostsApiResponse } from "@woodshop/api";
import { BlogNewPostButton } from "~/components/BlogNewPostButton";
import { BlogPostList } from "~/components/BlogPostsList";
import { PageContainer } from "~/components/PageContainer";
import { PageContent } from "~/components/PageContent";
import { PageHeader } from "~/components/PageHeader";
import { PageTitle } from "~/components/PageTitle";
import { api } from "~/services/api.server";
import { LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const response = await api.get<GET_PostsApiResponse>({
      headers: request.headers,
      url: "/post",
    });
    return response;
  } catch (error) {}
};

export default function BlogIndexPage() {
  const data = useLoaderData<GET_PostsApiResponse>();

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>All Posts</PageTitle>
        <BlogNewPostButton />
      </PageHeader>
      <PageContent>
        <BlogPostList data={data} />
      </PageContent>
    </PageContainer>
  );
}
