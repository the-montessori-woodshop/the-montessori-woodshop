import React, { forwardRef, useMemo } from "react";

import { InputHelp } from "../../atoms/inputs/InputHelp";
import { InputLabel } from "../../atoms/inputs/InputLabel";
import { InputText, InputTextProps } from "../../atoms/inputs/InputText";
import { InputWrapper } from "../../atoms/inputs/InputWrapper";

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
export const FormFieldText = forwardRef<HTMLInputElement, FormFieldTextProps>(
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
