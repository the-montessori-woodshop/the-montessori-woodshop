import {
  TopNav,
  TopNavList,
  TopNavListItem,
  TopNavSection,
} from "@woodshop/components";
import { Outlet } from "remix";

export default function ReviewsRoute() {
  return (
    <div>
      <TopNav>
        <TopNavSection>
          <TopNavList>
            <TopNavListItem>Product Reviews</TopNavListItem>
          </TopNavList>
        </TopNavSection>
      </TopNav>
      <Outlet />
    </div>
  );
}
