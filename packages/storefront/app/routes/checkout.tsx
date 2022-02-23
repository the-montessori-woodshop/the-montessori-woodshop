import { Responsive } from "@woodshop/components";
import {
  PageLayout,
  PageLayoutPane,
  PageLayoutPaneBody,
  PageLayoutPaneHeader,
} from "~/components/page-layout";
import { RouteWrapper } from "~/components/RouteWrapper";
import { getPageTitle } from "~/utils/getPageTitle";
import { MetaFunction, Outlet } from "remix";

export const meta: MetaFunction = () => {
  return { title: getPageTitle("Checkout") };
};

export default function CheckoutRoute() {
  return (
    <RouteWrapper full>
      <PageLayout>
        <PageLayoutPane>
          <Outlet />
        </PageLayoutPane>
        <Responsive atOrGreaterThan="tablet">
          <PageLayoutPane>
            <PageLayoutPaneHeader>Summary</PageLayoutPaneHeader>
            <PageLayoutPaneBody>summary info here</PageLayoutPaneBody>
          </PageLayoutPane>
        </Responsive>
      </PageLayout>
    </RouteWrapper>
  );
}
