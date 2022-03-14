import { styled } from "@linaria/react";
import React, { forwardRef } from "react";

export type InputWrapperProps = JSX.IntrinsicElements["div"];

const SDiv = styled.div`
  position: relative;
  &:focus-within {
    label {
      color: var(--color-primary);
    }
  }
`;

export const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>(
  function InputWrapper({ children, ...props }, ref) {
    return (
      <SDiv {...props} ref={ref}>
        {children}
      </SDiv>
    );
  }
);
