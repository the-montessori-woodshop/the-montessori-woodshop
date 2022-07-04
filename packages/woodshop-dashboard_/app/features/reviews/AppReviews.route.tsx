import { Outlet } from "@remix-run/react/dist";

import type { RemixFeatureUIRoute } from "../../types/routes.types";

export const AppReviews: RemixFeatureUIRoute = () => {
  return (
    <div>
      reviews
      <Outlet />
    </div>
  );
};
