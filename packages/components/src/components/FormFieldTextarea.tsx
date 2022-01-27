import React, { forwardRef, memo, useMemo } from "react";

import { InputHelp } from "./InputHelp";
import { InputLabel } from "./InputLabel";
import { InputTextarea, InputTextareaProps } from "./InputTextarea";
import { InputWrapper } from "./InputWrapper";

export type FormFieldTextareaProps = Omit<InputTextareaProps, "id"> & {
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
