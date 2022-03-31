import {
  TopNav,
  TopNavList,
  TopNavListItem,
  TopNavSection,
} from "@woodshop/components";
import {
  BlogLayout,
  BlogLayoutMain,
  BlogLayoutSide,
} from "~/components/BlogLayout";
import { BlogNav, BlogNavItem, BlogNavItemContent } from "~/components/BlogNav";
import { Outlet } from "remix";

export default function BlogRoute() {
  return (
    <>
      <TopNav>
        <TopNavSection>
          <TopNavList>
            <TopNavListItem>left</TopNavListItem>
          </TopNavList>
        </TopNavSection>
      </TopNav>
      <BlogLayout>
        <BlogLayoutSide>
          <BlogNav>
            <BlogNavItem to="/blog" end>
              <BlogNavItemContent>all posts</BlogNavItemContent>
            </BlogNavItem>
            <BlogNavItem to="./published">
              <BlogNavItemContent>published</BlogNavItemContent>
            </BlogNavItem>
            <BlogNavItem to="./draft">
              <BlogNavItemContent>draft</BlogNavItemContent>
            </BlogNavItem>
          </BlogNav>
        </BlogLayoutSide>
        <BlogLayoutMain>
          <Outlet />
        </BlogLayoutMain>
      </BlogLayout>
    </>
  );
}
