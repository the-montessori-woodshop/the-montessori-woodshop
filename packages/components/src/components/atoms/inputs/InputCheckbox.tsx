import { styled } from "@linaria/react";
import { Checkmark } from "@woodshop/icons";
import React, { forwardRef, memo } from "react";

import { makeRem } from "../../../theme/theme.utils";
import { Icon } from "../icons-illustrations/Icon";

export type InputCheckboxProps = Omit<JSX.IntrinsicElements["input"], "css">;

const SInputConatiner = styled.div`
  display: flex;
  align-content: center;
`;

const SInputIcon = styled.span`
    display: block;
    position: relative;
    height: ${makeRem(24)};
    min-width: ${makeRem(24)};
    margin-right: ${makeRem(16)} !important;
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
      content: "";
      position: absolute;
      border: ${makeRem(1)} solid var(--color-grey3);
      background-color: var(--color-white)};
      border-radius: ${makeRem(2)};
      height: ${makeRem(16)};
      width: ${makeRem(16)};
      margin-left: ${makeRem(-8)};
      margin-top: ${makeRem(-8)};
      left: 50%;
      top: 50%;
    }
`;

const SInput = styled.input`
  position: absolute;
  margin: 0;
  padding: 0;
  height: ${makeRem(24)};
  width: ${makeRem(24)};
  min-width: ${makeRem(24)};
  opacity: 0;
  z-index: 10;
  cursor: pointer;

  &:checked + ${SInputIcon} {
    &::before {
      border-color: var(--color-primary);
      background-color: var(--color-primary);
    }

    & > * {
      visibility: visible;
      z-index: 9;
    }
  }
`;

export const InputCheckboxFC = forwardRef<HTMLInputElement, InputCheckboxProps>(
  function InputCheckboxFC({ className, children, ...restProps }, ref) {
    return (
      <SInputConatiner>
        <SInput
          type="checkbox"
          className={className}
          {...restProps}
          ref={ref}
        />
        <SInputIcon>
          <Icon cxTitle="checkbox-check" cxColor="white" cxSize={16}>
            <Checkmark />
          </Icon>
        </SInputIcon>
        {children}
      </SInputConatiner>
    );
  }
);

export const InputCheckbox = memo(InputCheckboxFC);
