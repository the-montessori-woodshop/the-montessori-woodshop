import { Breadcrumb } from "~/components/breadcrumb";
import { Page, PageBody, PageHeader, PageHeaderTitle } from "~/features/page";
import type { RemixFeatureUIRoute } from "~/types/routes.types";

export const DashboardRouteLayout: RemixFeatureUIRoute = () => {
  return (
    <Page>
      <PageHeader>
        <PageHeaderTitle>Dashboard</PageHeaderTitle>
      </PageHeader>
      <PageBody>This be the dashboard</PageBody>
    </Page>
  );
};

DashboardRouteLayout.handle = {
  breadcrumb: () => {
    return (
      <Breadcrumb to="/" end>
        Dashboard
      </Breadcrumb>
    );
  },
};
