import { Outlet } from "@remix-run/react";

import { createRouteLinkStyles } from "../routes/routes.createRouteLinkStyles";
import type { RemixFeatureRoute } from "../routes/routes.types";
import routeStyles from "./AppIndex.css";

export const AppIndex: RemixFeatureRoute = () => {
  return (
    <div>
      dashboard
      <Outlet />
    </div>
  );
};
AppIndex.links = () => [createRouteLinkStyles(routeStyles)];
