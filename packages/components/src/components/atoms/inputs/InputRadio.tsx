import { styled } from "@linaria/react";
import React, { forwardRef, memo } from "react";

import { makeRem } from "../../../theme/theme.utils";

const SInputContainer = styled.div`
  display: flex;
  align-content: center;
  width: 100%;

  * {
    box-sizing: border-box;
  }
`;

const SInputIcon = styled.span`
  display: block;
  position: relative;
  height: ${makeRem(24)};
  min-width: ${makeRem(24)};
  margin-right: ${makeRem(16)};

  &:before {
    content: "";
    position: absolute;
    border: ${makeRem(2)} solid var(--color-grey3);
    background-color: var(--color-white);
    border-radius: 50%;
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

  &:checked + span {
    &::before {
      border-width: ${makeRem(4)};
      border-color: var(--color-primary);
    }

    & > * {
      visibility: visible;
      z-index: 9;
    }
  }
`;

export type InputRadioProps = Omit<JSX.IntrinsicElements["input"], "css">;

export const InputRadioFC = forwardRef<HTMLInputElement, InputRadioProps>(
  function InputRadioFC({ children, ...restProps }, ref) {
    return (
      <SInputContainer>
        <SInput type="radio" {...restProps} ref={ref} />
        <SInputIcon />
        {children}
      </SInputContainer>
    );
  }
);

export const InputRadio = memo(InputRadioFC);
