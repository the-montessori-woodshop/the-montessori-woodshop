import React, { forwardRef, memo, useMemo } from "react";

import { InputHelp } from "./InputHelp";
import { InputLabel } from "./InputLabel";
import { InputText, InputTextProps } from "./InputText";
import { InputWrapper } from "./InputWrapper";

export type FormFieldTextProps = Omit<InputTextProps, "id"> & {
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
