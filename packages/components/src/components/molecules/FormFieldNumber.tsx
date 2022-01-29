import React, { forwardRef, memo, useMemo } from "react";

import {
  InputHelp,
  InputLabel,
  InputNumber,
  InputNumberProps,
  InputWrapper
} from "../atoms";

export type FormFieldNumberProps = Omit<InputNumberProps, "id"> & {
  id: string;
  label?: string;
  error?: string;
  help?: string;
};

/**
 * An opinonated implementation of the various Input components
 * to render text fields
 */
export const FormFieldNumberFC = forwardRef<
  HTMLInputElement,
  FormFieldNumberProps
>(function FormFieldNumberFC(
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
      <InputNumber id={id} {...restInputProps} ref={ref} />
      <InputHelp error={!!error}>{error || help || null}</InputHelp>
    </InputWrapper>
  );
});

export const FormFieldNumber = memo(FormFieldNumberFC);
