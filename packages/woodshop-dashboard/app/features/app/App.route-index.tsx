import { Outlet } from "@remix-run/react";
import { Breadcrumb } from "~/components/breadcrumb/Breadcrumb";

import type { RemixFeatureUIRoute } from "../../types/routes.types";

export const AppRouteIndex: RemixFeatureUIRoute = () => {
  return (
    <div>
      dashboard
      <Outlet />
    </div>
  );
};

AppRouteIndex.handle = {
  breadcrumb: () => {
    return (
      <Breadcrumb to="/" end>
        Dashboard
      </Breadcrumb>
    );
  },
};
