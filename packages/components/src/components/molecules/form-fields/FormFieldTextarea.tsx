import React, { forwardRef, memo, useMemo } from "react";

import {
  InputHelp,
  InputLabel,
  InputTextarea,
  InputTextareaProps,
  InputWrapper
} from "../../atoms";

export type FormFieldTextareaProps = Omit<InputTextareaProps, "id" | "css"> & {
  id: string;
  label?: string;
  error?: string;
  help?: string;
};

/**
 * An opinonated implementation of the various Input components
 * to render text fields
 */
const FormFieldTextareaFC = forwardRef<
  HTMLTextAreaElement,
  FormFieldTextareaProps
>(function FormFieldTextareaFC(
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
      <InputTextarea id={id} {...restInputProps} ref={ref} />
      <InputHelp error={!!error}>{error || help || null}</InputHelp>
    </InputWrapper>
  );
});

export const FormFieldTextarea = memo(FormFieldTextareaFC);
