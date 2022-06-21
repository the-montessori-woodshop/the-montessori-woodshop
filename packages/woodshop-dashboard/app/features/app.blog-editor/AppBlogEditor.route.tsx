import { Outlet } from "@remix-run/react";
import { BlogNavItem } from "~/components/blog/BlogNavItem";
import { BlogNavItemContent } from "~/components/blog/BlogNavItemContent";

import { createRouteLinkStyles } from "../_routes/routes.createRouteLinkStyles";
import type { RemixFeatureRoute } from "../_routes/routes.types";
import routeStyles from "./AppBlogEditor.css";

export const AppBlogEditorRoute: RemixFeatureRoute = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

AppBlogEditorRoute.links = () => [
  BlogNavItem.links,
  BlogNavItemContent.links,
  ...createRouteLinkStyles(routeStyles),
];
