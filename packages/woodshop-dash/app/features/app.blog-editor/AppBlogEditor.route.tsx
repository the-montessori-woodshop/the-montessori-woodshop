import { Outlet } from "@remix-run/react";

import type { RemixFeatureRoute } from "../_routes/routes.types";

export const AppBlogEditorRoute: RemixFeatureRoute = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
