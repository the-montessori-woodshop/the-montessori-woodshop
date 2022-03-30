import type {
  GET_PostsApiResponse,
  GET_PostsApiSearchParams,
} from "@woodshop/api";
import { BlogNewPostButton } from "~/components/BlogNewPostButton";
import { BlogPostList } from "~/components/BlogPostsList";
import { PageContainer } from "~/components/PageContainer";
import { PageContent } from "~/components/PageContent";
import { PageHeader } from "~/components/PageHeader";
import { PageTitle } from "~/components/PageTitle";
import { WoodshopClientResponse, api } from "~/services/api.server";
import { LoaderFunction, useLoaderData } from "remix";

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
        published: false,
      },
    });
    return response;
  } catch (error) {}
};

export default function BlogDraftsPage() {
  const { data } =
    useLoaderData<WoodshopClientResponse<GET_PostsApiResponse>>();

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Drafts</PageTitle>
        <BlogNewPostButton />
      </PageHeader>
      <PageContent>
        <BlogPostList data={data} />
      </PageContent>
    </PageContainer>
  );
}
