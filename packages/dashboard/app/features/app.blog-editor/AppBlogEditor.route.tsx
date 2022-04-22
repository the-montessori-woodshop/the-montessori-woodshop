import { Outlet } from "@remix-run/react";
import { BlogNavItem } from "~/components/blog/BlogNavItem";
import { BlogNavItemContent } from "~/components/blog/BlogNavItemContent";

import { createRouteLinkStyles } from "../routes/routes.createRouteLinkStyles";
import type { RemixFeatureRoute } from "../routes/routes.types";
import routeStyles from "./AppBlogEditorRoute.css";

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
  createRouteLinkStyles(routeStyles),
];
