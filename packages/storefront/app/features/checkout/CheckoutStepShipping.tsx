import {
  Box,
  BoxContent,
  BoxHeader,
  FormFieldGroup,
  FormFieldRadioBox,
  FormFieldRadioBoxText,
  TypographyCopy,
  makeRem,
} from "@woodshop/components";
import { FC } from "react";
import styled from "styled-components";

import { useCheckoutWizardContext } from "./checkout.useCheckoutWizardContex";
import { CheckoutNextButton } from "./CheckoutNextButton";
import { CheckoutOverview } from "./CheckoutOverview";
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

const SDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SPrice = styled(TypographyCopy)`
  font-size: ${makeRem(18)};
  font-weight: bold;
`;

export const CheckoutStepShipping: FC = () => {
  return (
    <CheckoutStepWrapper>
      <CheckoutOverview />
      <Box>
        <BoxHeader
          cxTitle="Shipping method"
          cxSubtitle="Please note that the times listed below are shipping times. Each piece is made custom to order. Once the piece has been completed, it will be shipped according to the selection made below."
        />
        <BoxContent cxVariant="line-separated">
          <FormFieldGroup>
            <FormFieldRadioBox name="shipping" id="standard">
              <SDiv>
                <FormFieldRadioBoxText>
                  <strong>Standard Shipping</strong>&nbsp;
                  <span>(3 to 5 Days via USPS)</span>
                </FormFieldRadioBoxText>
                <SPrice>$5.99</SPrice>
              </SDiv>
            </FormFieldRadioBox>
            <FormFieldRadioBox name="shipping" id="expidited">
              <SDiv>
                <FormFieldRadioBoxText>
                  <strong>Expidited Shipping</strong>&nbsp;
                  <span>(1 to 2 Days via USPS)</span>
                </FormFieldRadioBoxText>
                <SPrice>$10.99</SPrice>
              </SDiv>
            </FormFieldRadioBox>
            <FormFieldRadioBox name="shipping" id="overnight">
              <SDiv>
                <FormFieldRadioBoxText>
                  <strong>Overnight Shipping</strong>&nbsp;
                  <span>(1 Day via USPS)</span>
                </FormFieldRadioBoxText>
                <SPrice>$21.99</SPrice>
              </SDiv>
            </FormFieldRadioBox>
          </FormFieldGroup>
        </BoxContent>
      </Box>
      <CheckoutStepActions>
        <NextButton />
      </CheckoutStepActions>
    </CheckoutStepWrapper>
  );
};
