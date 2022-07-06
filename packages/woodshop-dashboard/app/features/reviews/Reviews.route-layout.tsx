import { Outlet } from "@remix-run/react";
import { Breadcrumb } from "~/components/breadcrumb";

import type { RemixFeatureUIRoute } from "../../types/routes.types";
import { Page, PageBody, PageHeader, PageHeaderTitle } from "../page";

export const ReviewsRouteLayout: RemixFeatureUIRoute = () => {
  return (
    <Page>
      <PageHeader>
        <PageHeaderTitle>Reviews</PageHeaderTitle>
      </PageHeader>
      <PageBody>
        <Outlet />
      </PageBody>
    </Page>
  );
};

ReviewsRouteLayout.handle = {
  breadcrumb: () => {
    return (
      <Breadcrumb to="/reviews" end>
        Reviews
      </Breadcrumb>
    );
  },
};
