import type {
  GET_PostsApiResponse,
  GET_PostsApiSearchParams,
} from "@woodshop/api";
import { BlogPostList } from "~/features/blog/BlogPostsList";
import { Breadcrumb } from "~/components/Breadcrumb";
import { PageContainer } from "~/components/PageContainer";
import { PageContent } from "~/components/PageContent";
import { PageHeader } from "~/components/PageHeader";
import { PageTitle } from "~/components/PageTitle";
import { api } from "~/services/api.server";
import type { UseMatchesMatch } from "~/types/useMatches";
import type { LoaderFunction} from "remix";
import { useLoaderData } from "remix";
import { BlogNewPostButton } from "~/features/blog/BlogNewPostButton";

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
