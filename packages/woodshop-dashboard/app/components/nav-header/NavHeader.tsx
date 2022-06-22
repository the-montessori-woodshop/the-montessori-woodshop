import { TopNav, TopNavSection } from "@woodshop/components";
import { FC } from "react";

import { NavHeaderBreadcrumb } from "./NavHeaderBreadcrumb";

export const NavHeader: FC = () => {
  return (
    <TopNav>
      <TopNavSection>
        <NavHeaderBreadcrumb />
      </TopNavSection>
    </TopNav>
  );
};
