import { Box, ButtonGroup } from "@woodshop/components";
import { FC } from "react";

import { useCheckoutWizardContext } from "./checkout.useCheckoutWizardContex";
import { CheckoutDescriptionList } from "./CheckoutDescriptionList";
import { CheckoutDescriptionListItem } from "./CheckoutDescriptionListItem";
import { CheckoutDescriptionListItemData } from "./CheckoutDescriptionListItemData";
import { CheckoutDescriptionListItemTag } from "./CheckoutDescriptionListItemTag";
import { CheckoutNextButton } from "./CheckoutNextButton";
import { CheckoutStepActions } from "./CheckoutStepActions";
import { CheckoutStepWrapper } from "./CheckoutStepWrapper";

const NextButton = () => {
  const { goToStep } = useCheckoutWizardContext();

  return (
    <CheckoutNextButton
      onClick={goToStep({
        direction: "forward",
        stepName: "payment",
      })}
    >
      Continue to payment
    </CheckoutNextButton>
  );
};

export const CheckoutStepShipping: FC = () => {
  return (
    <CheckoutStepWrapper>
      <Box cxVariant="no-gutters">
        <CheckoutDescriptionList>
          <CheckoutDescriptionListItem>
            <CheckoutDescriptionListItemTag>
              Name
            </CheckoutDescriptionListItemTag>
            <CheckoutDescriptionListItemData onClick={() => void 0}>
              -- --
            </CheckoutDescriptionListItemData>
          </CheckoutDescriptionListItem>
          <CheckoutDescriptionListItem>
            <CheckoutDescriptionListItemTag>
              Address
            </CheckoutDescriptionListItemTag>
            <CheckoutDescriptionListItemData onClick={() => void 0}>
              -- --
            </CheckoutDescriptionListItemData>
          </CheckoutDescriptionListItem>
        </CheckoutDescriptionList>
      </Box>

      <Box cxTitle="Shipping method" cxVariant="line-separated"></Box>
      <CheckoutStepActions>
        <NextButton />
      </CheckoutStepActions>
    </CheckoutStepWrapper>
  );
};
