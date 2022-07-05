import { Outlet } from "@remix-run/react";
import { Breadcrumb } from "~/components/breadcrumb";
import { Page } from "~/features/page";
import type { RemixFeatureUIRoute } from "~/types/routes.types";

export const ImagesRouteLayout: RemixFeatureUIRoute = () => {
  return (
    <Page>
      <Outlet />
    </Page>
  );
};

ImagesRouteLayout.handle = {
  breadcrumb: () => {
    return (
      <Breadcrumb to="/images" end>
        Images
      </Breadcrumb>
    );
  },
};
