import { Outlet } from "@remix-run/react";

import type { RemixFeatureUIRoute } from "../../types/routes.types";

export const AppBlogEditorRoute: RemixFeatureUIRoute = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
