import { Box, PageSection, PageSectionPane } from "@woodshop/components";
import { RouteWrapper } from "~/components/RouteWrapper";
import { getPageTitle } from "~/utils/getPageTitle";
import { MetaFunction, Outlet } from "remix";

export const meta: MetaFunction = () => {
  return { title: getPageTitle("Blog") };
};

export default function AuthRoute() {
  return (
    <RouteWrapper>
      <PageSection cxBackground="main" cxLayout="split-pane">
        <PageSectionPane>
          <Box
            cxTitle="Sign-in"
            cxSubtitle="Nullam id dolor id nibh ultricies vehicula ut id elit."
            style={{
              background: "var(--color-white)",
              width: "500px",
            }}
          >
            <Outlet />
          </Box>
        </PageSectionPane>
        <PageSectionPane>more stuff</PageSectionPane>
      </PageSection>
    </RouteWrapper>
  );
}
