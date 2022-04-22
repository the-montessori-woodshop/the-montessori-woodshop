import { Outlet } from "@remix-run/react";

import { createRouteLinkStyles } from "../routes/routes.createRouteLinkStyles";
import type { RemixFeatureRoute } from "../routes/routes.types";
import routeStyles from "./AppReviews.css";

export const AppReviews: RemixFeatureRoute = () => {
  return (
    <div>
      reviews
      <Outlet />
    </div>
  );
};
AppReviews.links = () => [createRouteLinkStyles(routeStyles)];
