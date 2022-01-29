import React, { forwardRef, memo, useMemo } from "react";

import {
  InputHelp,
  InputLabel,
  InputSearch,
  InputSearchProps,
  InputWrapper
} from "../atoms";

export type FormFieldSearchProps = Omit<
  InputSearchProps,
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
export const FormFieldSearchFC = forwardRef<
  HTMLInputElement,
  FormFieldSearchProps
>(function FormFieldSearchFC(
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
      <InputSearch id={id} {...restInputProps} ref={ref} />
      <InputHelp error={!!error}>{error || help || null}</InputHelp>
    </InputWrapper>
  );
});

export const FormFieldSearch = memo(FormFieldSearchFC);
