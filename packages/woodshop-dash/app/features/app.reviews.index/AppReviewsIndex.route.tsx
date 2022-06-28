import { Outlet } from "@remix-run/react";

import type { RemixFeatureRoute } from "../_routes/routes.types";

export const AppReviewsIndexRoute: RemixFeatureRoute = () => {
  return (
    <div>
      reviews
      <Outlet />
    </div>
  );
};
AppReviewsIndexRoute.links = () => [];
