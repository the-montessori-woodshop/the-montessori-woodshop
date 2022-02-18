import React, { forwardRef, memo, useMemo } from "react";

import {
  InputHelp,
  InputLabel,
  InputText,
  InputTextProps,
  InputWrapper
} from "../../atoms";

export type FormFieldTextProps = Omit<InputTextProps, "id" | "css"> & {
  id: string;
  label?: string;
  error?: string;
  help?: string;
};

/**
 * An opinonated implementation of the various Input components
 * to render text fields
 */
const FormFieldTextFC = forwardRef<HTMLInputElement, FormFieldTextProps>(
  function FormFieldTextFC({ id, label, error, help, ...restInputProps }, ref) {
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
        <InputText id={id} {...restInputProps} ref={ref} />
        <InputHelp error={!!error}>{error || help || null}</InputHelp>
      </InputWrapper>
    );
  }
);

export const FormFieldText = memo(FormFieldTextFC);
