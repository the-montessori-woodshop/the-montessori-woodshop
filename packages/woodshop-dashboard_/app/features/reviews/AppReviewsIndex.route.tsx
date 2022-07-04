import { Outlet } from "@remix-run/react/dist";

import type { RemixFeatureUIRoute } from "../../types/routes.types";

export const AppReviewsIndexRoute: RemixFeatureUIRoute = () => {
  return (
    <div>
      reviews
      <Outlet />
    </div>
  );
};
AppReviewsIndexRoute.links = () => [];
