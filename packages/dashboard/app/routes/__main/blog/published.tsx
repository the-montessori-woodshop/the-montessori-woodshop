import { BlogNewPostButton } from "~/components/BlogNewPostButton";
import { PageContainer } from "~/components/PageContainer";
import { PageContent } from "~/components/PageContent";
import { PageHeader } from "~/components/PageHeader";
import { PageTitle } from "~/components/PageTitle";

export default function BlogIndexPage() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Published</PageTitle>
        <BlogNewPostButton />
      </PageHeader>
      <PageContent>published articles</PageContent>
    </PageContainer>
  );
}
