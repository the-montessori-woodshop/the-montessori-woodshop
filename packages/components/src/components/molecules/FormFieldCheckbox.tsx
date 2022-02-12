import React, { forwardRef, memo, useMemo } from "react";

import {
  InputCheckbox,
  InputCheckboxProps,
  InputLabel,
  InputWrapper
} from "../atoms";

export type FormFieldCheckboxProps = Omit<InputCheckboxProps, "id"> & {
  id: string;
  label?: string;
  error?: string;
};

/**
 * An opinonated implementation of the various Input components
 * to render text fields
 */
const FormFieldCheckboxFC = forwardRef<
  HTMLInputElement,
  FormFieldCheckboxProps
>(function FormFieldCheckboxFC({ id, label, error, ...restInputProps }, ref) {
  const Label = useMemo(() => {
    if (label) {
      return (
        <InputLabel htmlFor={id} error={error} style={{ margin: 0 }}>
          {label}
        </InputLabel>
      );
    }
    return null;
  }, []);

  return (
    <InputWrapper>
      <InputCheckbox id={id} {...restInputProps} ref={ref}>
        {Label}
      </InputCheckbox>
    </InputWrapper>
  );
});

export const FormFieldCheckbox = memo(FormFieldCheckboxFC);
