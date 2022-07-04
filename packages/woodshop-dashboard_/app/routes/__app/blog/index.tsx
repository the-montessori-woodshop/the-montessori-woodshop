import type { LoaderFunction } from "@remix-run/cloudflare/dist";
import { useLoaderData } from "@remix-run/react/dist";
import type { GET_PostsApiResponse } from "@woodshop/api";
import { BlogNewPostButton } from "~/components/blog/BlogNewPostButton";
import { BlogPostList } from "~/components/blog/BlogPostsList";
import { PageContainer } from "~/components/page/PageContainer";
import { PageContent } from "~/components/page/PageContent";
import { PageHeader } from "~/components/page/PageHeader";
import { PageTitle } from "~/components/page/PageTitle";
import { api } from "~/features/api/api.server";

export const loader: LoaderFunction = async ({ request }) => {
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

export default function BlogIndexPage() {
  const data = useLoaderData<GET_PostsApiResponse>();

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>All Posts</PageTitle>
        <BlogNewPostButton />
      </PageHeader>
      <PageContent className="main">
        <BlogPostList data={data} />
      </PageContent>
    </PageContainer>
  );
}
