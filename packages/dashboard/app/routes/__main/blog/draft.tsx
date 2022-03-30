import { BlogNewPostButton } from "~/components/BlogNewPostButton";
import { PageContainer } from "~/components/PageContainer";
import { PageContent } from "~/components/PageContent";
import { PageHeader } from "~/components/PageHeader";
import { PageTitle } from "~/components/PageTitle";

export default function BlogDraftsPage() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Drafts</PageTitle>
        <BlogNewPostButton />
      </PageHeader>
      <PageContent>drafted articles</PageContent>
    </PageContainer>
  );
}
