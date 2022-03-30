import { PageContainer } from "~/components/PageContainer";
import { PageContent } from "~/components/PageContent";
import { PageHeader } from "~/components/PageHeader";
import { PageTitle } from "~/components/PageTitle";
import { Outlet } from "remix";

export default function Route() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle contentEditable="true">New Post</PageTitle>
      </PageHeader>
      <PageContent>
        <Outlet />
      </PageContent>
    </PageContainer>
  );
}
