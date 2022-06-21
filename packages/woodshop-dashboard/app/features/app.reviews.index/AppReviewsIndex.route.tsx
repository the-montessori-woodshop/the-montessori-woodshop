import { Outlet } from "@remix-run/react";

import { createRouteLinkStyles } from "../_routes/routes.createRouteLinkStyles";
import type { RemixFeatureRoute } from "../_routes/routes.types";
import routeStyles from "./AppReviewsIndex.css";

export const AppReviewsIndexRoute: RemixFeatureRoute = () => {
  return (
    <div>
      reviews
      <Outlet />
    </div>
  );
};
AppReviewsIndexRoute.links = () => [...createRouteLinkStyles(routeStyles)];
