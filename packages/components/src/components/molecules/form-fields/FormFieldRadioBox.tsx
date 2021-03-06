import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { ReactNode, forwardRef, memo, useMemo } from "react";

import { makeRem } from "../../../theme/theme.utils";
import { InputRadio, InputRadioProps } from "../../atoms/inputs/InputRadio";
import { FormFieldRadioBoxText } from "./FormFieldRadioBoxText";

export type FormFieldRadioBoxProps = Omit<InputRadioProps, "id"> & {
  id: string;
  children: ReactNode;
  error?: string;
};

const SLabel = styled.label`
  padding: 0 ${makeRem(16)};
  height: ${makeRem(72)};
  border-radius: ${makeRem(2)};
  position: relative;
  border: ${makeRem(1)} solid transparent;
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    & ~ div {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      border-radius: ${makeRem(2)};
      border: ${makeRem(1)} solid var(--color-grey3);
      transition: all 0.1s ease-in-out;
    }

    &:checked {
      & ~ div {
        border: ${makeRem(2)} solid var(--color-primary);
        box-shadow: 0 0 4px 0 rgba(var(--color-primary-rgba), 0.46);
        border-radius: ${makeRem(2)};
      }
    }

    &:hover {
      &:not(:checked) {
        & ~ div {
          border: ${makeRem(1)} solid var(--color-grey4);
          box-shadow: 0 0 4px 0 rgba(var(--color-grey4-rgba), 0.46);
          border-radius: ${makeRem(2)};
        }
      }
    }
  }
`;

const SSpan = styled.span`
  display: block;
  width: 100%;
`;

/**
 * An opinonated implementation of the various Input components
 * to render text fields
 */
const FormFieldRadioBoxFC = forwardRef<
  HTMLInputElement,
  FormFieldRadioBoxProps
>(function FormFieldRadioBoxFC(
  { id, className, children, error, ...restInputProps },
  ref
) {
  const Text = useMemo(() => {
    if (typeof children === "string") {
      return <FormFieldRadioBoxText>{children}</FormFieldRadioBoxText>;
    }
    return children;
  }, []);

  return (
    <SLabel
      htmlFor={id}
      className={clsx(className, {
        error: !!error
      })}
    >
      <InputRadio id={id} {...restInputProps} ref={ref}>
        <SSpan>{Text}</SSpan>
        <div />
      </InputRadio>
    </SLabel>
  );
});

export const FormFieldRadioBox = memo(FormFieldRadioBoxFC);
