import { Outlet } from "@remix-run/react";
import { BlogNavItem } from "~/components/blog/BlogNavItem";
import { BlogNavItemContent } from "~/components/blog/BlogNavItemContent";

import { createRouteLinkStyles } from "../routes/routes.createRouteLinkStyles";
import type { RemixFeatureRoute } from "../routes/routes.types";
import routeStyles from "./AppBlog.css";

export const AppBlog: RemixFeatureRoute = () => {
  return (
    <div className="blog-layout">
      <article>
        <ul>
          <BlogNavItem to="/blog" end>
            <BlogNavItemContent>all posts</BlogNavItemContent>
          </BlogNavItem>
          <BlogNavItem to="./published">
            <BlogNavItemContent>published</BlogNavItemContent>
          </BlogNavItem>
          <BlogNavItem to="./drafts">
            <BlogNavItemContent>drafts</BlogNavItemContent>
          </BlogNavItem>
        </ul>
      </article>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
AppBlog.links = () => [
  BlogNavItem.links,
  BlogNavItemContent.links,
  createRouteLinkStyles(routeStyles),
];
