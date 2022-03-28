import {
  TopNav,
  TopNavList,
  TopNavListItem,
  TopNavSection,
} from "@woodshop/components";
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
      <Outlet />
    </>
  );
}
