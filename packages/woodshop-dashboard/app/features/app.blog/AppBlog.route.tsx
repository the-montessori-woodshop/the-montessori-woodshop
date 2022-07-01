import { Outlet } from "@remix-run/react";
import { BlogNavItem } from "~/components/blog/BlogNavItem";
import { BlogNavItemContent } from "~/components/blog/BlogNavItemContent";

import type { RemixFeatureRoute } from "../_routes/routes.types";

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
AppBlog.links = () => [];
