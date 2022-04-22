import { Outlet } from "@remix-run/react";

import { createRouteLinkStyles } from "../routes/routes.createRouteLinkStyles";
import type { RemixFeatureRoute } from "../routes/routes.types";
import routeStyles from "./AppReviewsIndex.css";

export const AppReviewsIndexRoute: RemixFeatureRoute = () => {
  return (
    <div>
      reviews
      <Outlet />
    </div>
  );
};
AppReviewsIndexRoute.links = () => [createRouteLinkStyles(routeStyles)];
