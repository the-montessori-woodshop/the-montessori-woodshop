import { Outlet } from "@remix-run/react";
import { Breadcrumb } from "~/components/breadcrumb";
import type { RemixFeatureUIRoute } from "~/types/routes.types";
import clsx from "clsx";

import { BlogNavItem } from "./BlogNavItem";
import { BlogNavItemContent } from "./BlogNavItemContent";

export const BlogListRouteLayout: RemixFeatureUIRoute = () => {
  return (
    <div className={clsx("SwrfUfnbJj", "layout")}>
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

BlogListRouteLayout.handle = {
  breadcrumb: () => {
    return (
      <Breadcrumb to="/blog" end>
        Blog
      </Breadcrumb>
    );
  },
};
