import { PageSection, PageSectionPane } from "@woodshop/components";
import { RouteWrapper } from "~/components/RouteWrapper";
import { Outlet } from "@remix-run/react";

export default function AuthRoute() {
  return (
    <RouteWrapper>
      <PageSection>
        <PageSectionPane>
          <Outlet />
        </PageSectionPane>
      </PageSection>
    </RouteWrapper>
  );
}
