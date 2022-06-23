import { Outlet } from "@remix-run/react";

import type { RemixFeatureRoute } from "../_routes/routes.types";

export const AppIndex: RemixFeatureRoute = () => {
  return (
    <div>
      dashboard
      <Outlet />
    </div>
  );
};
AppIndex.links = () => [];
