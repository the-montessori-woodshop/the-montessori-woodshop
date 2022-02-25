import {
  PageLayoutPaneBody,
  PageLayoutPaneHeader,
} from "~/components/page-layout";
import {
  CheckoutWizard,
  CheckoutWizardBody,
  CheckoutWizardHeader,
} from "~/features/checkout";
import styled from "styled-components";

const SPageLayoutPaneHeader = styled(PageLayoutPaneHeader)`
  border-bottom: 1px solid var(--color-grey3);
`;

export default function CheckoutIndex() {
  return (
    <>
      <CheckoutWizard>
        <SPageLayoutPaneHeader>
          <CheckoutWizardHeader />
        </SPageLayoutPaneHeader>
        <PageLayoutPaneBody>
          <CheckoutWizardBody />
        </PageLayoutPaneBody>
      </CheckoutWizard>
    </>
  );
}
