import { Outlet } from "@remix-run/react";

import { createRouteLinkStyles } from "../_routes/routes.createRouteLinkStyles";
import type { RemixFeatureRoute } from "../_routes/routes.types";
import routeStyles from "./AppReviews.css";

export const AppReviews: RemixFeatureRoute = () => {
  return (
    <div>
      reviews
      <Outlet />
    </div>
  );
};
AppReviews.links = () => [...createRouteLinkStyles(routeStyles)];
