import { Outlet } from "@remix-run/react";
import { Breadcrumb, BreadcrumbSeparator } from "~/components/breadcrumb";
import type { UseMatchesMatch } from "~/types/useMatches";

import type { RemixFeatureUIRoute } from "../../types/routes.types";

export const BlogEditorRouteLayout: RemixFeatureUIRoute = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

BlogEditorRouteLayout.handle = {
  breadcrumb: (data: UseMatchesMatch) => {
    return (
      <>
        <Breadcrumb to="/blog" end>
          Blog
        </Breadcrumb>
        <BreadcrumbSeparator />
        <Breadcrumb to={`/blog/editor/${data.params?.id}`}>
          {data.params?.id}
        </Breadcrumb>
      </>
    );
  },
};
