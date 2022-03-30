import {
  TopNav,
  TopNavList,
  TopNavListItem,
  TopNavSection,
} from "@woodshop/components";
import { Outlet } from "remix";

export default function BlogEditorLayout() {
  return (
    <>
      <TopNav>
        <TopNavSection>
          <TopNavList>
            <TopNavListItem>Blog Editor</TopNavListItem>
          </TopNavList>
        </TopNavSection>
      </TopNav>
      blog editor layout
      <Outlet />
    </>
  );
}
