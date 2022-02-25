import { Button, TypographyCopy, makeRem } from "@woodshop/components";
import { FC, MouseEventHandler, memo, useMemo } from "react";
import styled from "styled-components";

import { useCheckoutWizardContext } from "./checkout.useCheckoutWizardContex";

const SText = styled(TypographyCopy).attrs({
  cxVariant: "body2",
  cxColor: "textPrimary",
  cxNode: "span",
})``;

const SButton = styled(Button)<{ $isActive: boolean }>`
  min-width: ${makeRem(62)};
  height: ${makeRem(24)} !important;
  min-height: ${makeRem(24)} !important;
  justify-content: flex-start;

  & > span {
    font-weight: ${({ $isActive }) =>
      $isActive ? "bold" : "initial"} !important;
    text-decoration: ${({ $isActive }) =>
      $isActive ? "underline" : "initial"} !important;
  }
`;

const CheckoutBreadcrumb: FC<{
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}> = memo(function CheckoutBreadcrumb({ isActive, onClick, children }) {
  return (
    <SButton onClick={onClick} $isActive={isActive}>
      {useMemo(
        () => (
          <SText
            style={{
              fontWeight: isActive ? "bold" : "normal",
            }}
          >
            {children}
          </SText>
        ),
        []
      )}
    </SButton>
  );
});

const SDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const CheckoutBreadcrumbs: FC = () => {
  const {
    goToStep,
    currentStep: { stepName },
  } = useCheckoutWizardContext();

  const goToAddress = useMemo(
    () =>
      goToStep({
        stepName: "address",
        direction: "back",
      }),
    [goToStep]
  );
  const goToShipping = useMemo(
    () =>
      goToStep({
        stepName: "shipping",
        direction: stepName === "address" ? "forward" : "back",
      }),
    [stepName, goToStep]
  );
  const goToPayment = useMemo(
    () =>
      goToStep({
        stepName: "payment",
        direction:
          stepName === "address" || stepName === "shipping"
            ? "forward"
            : "back",
      }),
    [stepName]
  );

  const goToReview = useMemo(
    () =>
      goToStep({
        stepName: "review",
        direction: "forward",
      }),
    [stepName]
  );

  return (
    <SDiv>
      <CheckoutBreadcrumb
        onClick={goToAddress}
        isActive={stepName === "address"}
      >
        Address
      </CheckoutBreadcrumb>
      <SText>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</SText>
      <CheckoutBreadcrumb
        onClick={goToShipping}
        isActive={stepName === "shipping"}
      >
        Shipping
      </CheckoutBreadcrumb>
      <SText>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</SText>
      <CheckoutBreadcrumb
        onClick={goToPayment}
        isActive={stepName === "payment"}
      >
        Payment
      </CheckoutBreadcrumb>
      <SText>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</SText>
      <CheckoutBreadcrumb onClick={goToReview} isActive={stepName === "review"}>
        Review
      </CheckoutBreadcrumb>
    </SDiv>
  );
};
