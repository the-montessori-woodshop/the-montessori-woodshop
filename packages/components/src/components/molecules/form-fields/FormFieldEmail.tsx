import React, { forwardRef, memo, useMemo } from "react";

import { InputEmail, InputEmailProps } from "../../atoms/inputs/InputEmail";
import { InputHelp } from "../../atoms/inputs/InputHelp";
import { InputLabel } from "../../atoms/inputs/InputLabel";
import { InputWrapper } from "../../atoms/inputs/InputWrapper";

export type FormFieldEmailProps = Omit<
  InputEmailProps,
  "id" | "StartIcon" | "EndIcon"
> & {
  id: string;
  label?: string;
  error?: string;
  help?: string;
};

/**
 * An opinonated implementation of the various Input components
 * to render text fields
 */
export const FormFieldEmailFC = forwardRef<
  HTMLInputElement,
  FormFieldEmailProps
>(function FormFieldEmailFC(
  { id, label, error, help, ...restInputProps },
  ref
) {
  const Label = useMemo(() => {
    if (label) {
      return (
        <InputLabel htmlFor={id} error={error}>
          {label}
        </InputLabel>
      );
    }
    return null;
  }, []);

  return (
    <InputWrapper>
      {Label}
      <InputEmail id={id} {...restInputProps} ref={ref} />
      <InputHelp error={!!error}>{error || help || null}</InputHelp>
    </InputWrapper>
  );
});

export const FormFieldEmail = memo(FormFieldEmailFC);
