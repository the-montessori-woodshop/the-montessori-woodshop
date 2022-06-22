import type { MetaFunction } from "@remix-run/cloudflare";
import { Outlet } from "@remix-run/react";
import { MediaQuery } from "@woodshop/components";
import { PageLayout, PageLayoutPane } from "~/components/page-layout";
import { RouteWrapper } from "~/components/RouteWrapper";
import { CheckoutSummary } from "~/features/checkout/CheckoutSummary";
import { getPageTitle } from "~/utils/getPageTitle";

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
        <MediaQuery atOrGreaterThan="tablet">
          <CheckoutSummary
            style={{
              width: "360px",
            }}
          >
            test body
          </CheckoutSummary>
        </MediaQuery>
      </PageLayout>
    </RouteWrapper>
  );
}
