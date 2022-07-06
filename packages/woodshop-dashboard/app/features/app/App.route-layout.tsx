import { Outlet } from "@remix-run/react";
import { TopNav, TopNavSection } from "@woodshop/components";
import { authenticator } from "~/features/auth/auth.server";
import type { RemixFeatureUIRoute } from "~/types/routes.types";
import clsx from "clsx";

import { AppLayoutBreadcrumb } from "./AppLayoutBreadcrumb";
import { AppLayoutSideNav } from "./AppLayoutSideNav";

export const AppRouteLayout: RemixFeatureUIRoute = () => {
  return (
    <>
      <AppLayoutSideNav />
      <div className={clsx("gDI1gHS1kS", "content")}>
        <TopNav>
          <TopNavSection>
            <AppLayoutBreadcrumb />
          </TopNavSection>
        </TopNav>
        <Outlet />
      </div>
    </>
  );
};

AppRouteLayout.loader = ({ request }) => {
  return authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
