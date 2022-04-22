import { BlogNavItem } from "~/components/blog/BlogNavItem";
import { BlogNavItemContent } from "~/components/blog/BlogNavItemContent";
import { Breadcrumb } from "~/components/Breadcrumb";
import type { LinksFunction } from "remix";
import { Outlet } from "remix";

export const links: LinksFunction = () => [
  BlogNavItem.links,
  BlogNavItemContent.links,
];

export const handle = {
  breadcrumb: () => {
    return (
      <Breadcrumb to="/blog" end>
        Blog
      </Breadcrumb>
    );
  },
};

export default function BlogRoute() {
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
}
