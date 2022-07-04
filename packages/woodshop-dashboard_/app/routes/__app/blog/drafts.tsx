import type { LoaderFunction } from "@remix-run/cloudflare/dist";
import { useLoaderData } from "@remix-run/react/dist";
import type {
  GET_PostsApiResponse,
  GET_PostsApiSearchParams,
} from "@woodshop/api";
import { BlogNewPostButton } from "~/components/blog/BlogNewPostButton";
import { BlogPostList } from "~/components/blog/BlogPostsList";
import { Breadcrumb } from "~/components/breadcrumb/Breadcrumb";
import { PageContainer } from "~/components/page/PageContainer";
import { PageContent } from "~/components/page/PageContent";
import { PageHeader } from "~/components/page/PageHeader";
import { PageTitle } from "~/components/page/PageTitle";
import { api } from "~/features/api/api.server";
import type { UseMatchesMatch } from "~/types/useMatches";

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

export const handle = {
  breadcrumb: (data: UseMatchesMatch) => {
    return (
      <Breadcrumb to="/blog/drafts" end>
        Drafts
      </Breadcrumb>
    );
  },
};

export default function BlogDraftsPage() {
  const data = useLoaderData<GET_PostsApiResponse>();

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Drafts</PageTitle>
        <BlogNewPostButton />
      </PageHeader>
      <PageContent className="main">
        <BlogPostList data={data} />
      </PageContent>
    </PageContainer>
  );
}
