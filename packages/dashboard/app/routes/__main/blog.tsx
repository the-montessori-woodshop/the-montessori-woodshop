import {
  BlogLayout,
  BlogLayoutMain,
  BlogLayoutSide,
} from "~/components/BlogLayout";
import { BlogNav, BlogNavItem, BlogNavItemContent } from "~/components/BlogNav";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Outlet } from "remix";

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
    <BlogLayout>
      <BlogLayoutSide>
        <BlogNav>
          <BlogNavItem to="/blog" end>
            <BlogNavItemContent>all posts</BlogNavItemContent>
          </BlogNavItem>
          <BlogNavItem to="./published">
            <BlogNavItemContent>published</BlogNavItemContent>
          </BlogNavItem>
          <BlogNavItem to="./drafts">
            <BlogNavItemContent>drafts</BlogNavItemContent>
          </BlogNavItem>
        </BlogNav>
      </BlogLayoutSide>
      <BlogLayoutMain>
        <Outlet />
      </BlogLayoutMain>
    </BlogLayout>
  );
}
