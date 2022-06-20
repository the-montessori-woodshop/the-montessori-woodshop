import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { forwardRef, memo } from "react";

import { makeRem } from "../../../theme/theme.utils";

export type InputTextareaProps = JSX.IntrinsicElements["textarea"] & {
  cxError?: boolean;
};

const STextarea = styled.textarea`
  font-family: var(--font-family);
  line-height: var(--font-line-height);
  color: var(--color-textPrimary);
  font-size: ${makeRem(16)};
  width: 100%;
  padding: ${makeRem(12)} ${makeRem(16)};
  border: ${makeRem(1)} solid var(--color-grey3);
  border-radius: ${makeRem(2)};
  background-color: var(--color-grey2);
  min-height: ${makeRem(120)};

  &:focus,
  &:active {
    border-color: var(--color-primary);
    outline: none;
  }

  &::placeholder {
    color: var(--color-grey4);
  }

  .error {
    color: var(--color-danger);
    border-color: var(--color-danger);

    &:focus {
      border-color: var(--color-danger);
    }
  }
`;

const InputTextareaFC = forwardRef<HTMLTextAreaElement, InputTextareaProps>(
  function InputTextareaFC({ className, cxError, ...props }, ref) {
    return (
      <STextarea
        {...props}
        ref={ref}
        className={clsx(className, {
          error: cxError
        })}
      />
    );
  }
);

export const InputTextarea = memo(InputTextareaFC);
