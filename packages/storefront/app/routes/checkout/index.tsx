import { TypographyHeading, makeRem } from "@woodshop/components";
import {
  PageLayoutPaneBody,
  PageLayoutPaneHeader,
} from "~/components/page-layout";
import { PageLayoutPaneFooter } from "~/components/page-layout/PageLayoutPaneFooter";
import { CheckoutBreadcrumbs, CheckoutWizardHeader } from "~/features/checkout";
import { CheckoutSteps } from "~/features/checkout/CheckoutSteps";
import { CheckoutWizard } from "~/features/checkout/CheckoutWizard";
import { CheckoutWizardBody } from "~/features/checkout/CheckoutWizardBody";
import { CheckoutWizardFooter } from "~/features/checkout/CheckoutWizardFooter";
import styled from "styled-components";

const SPage = styled.div`
  width: 100%;
  height: 100%;
`;

const CheckoutLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CheckoutLayoutHead = styled.div`
  padding-left: ${makeRem(24)};
  padding-right: ${makeRem(24)};
`;

const CheckoutLayoutMain = styled.div`
  flex: 1;
  padding-left: ${makeRem(24)};
  padding-right: ${makeRem(24)};
`;

const CheckoutLayoutFooter = styled.div`
  background: var(--color-white);
  box-shadow: 0 -4px 10px 2px rgba(214, 214, 214, 0.5);
  padding-left: ${makeRem(24)};
  padding-right: ${makeRem(24)};
  height: ${makeRem(80)};
  display: flex;
  align-items: center;
`;

export default function CheckoutIndex() {
  return (
    <>
      <CheckoutWizard>
        <PageLayoutPaneHeader>
          <CheckoutWizardHeader />
        </PageLayoutPaneHeader>
        <PageLayoutPaneBody>
          <CheckoutWizardBody />
        </PageLayoutPaneBody>
        <PageLayoutPaneFooter>
          <CheckoutWizardFooter />
        </PageLayoutPaneFooter>
      </CheckoutWizard>
    </>
  );
}
