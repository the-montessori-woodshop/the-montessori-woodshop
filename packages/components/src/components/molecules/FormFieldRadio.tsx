import React, { forwardRef, memo, useMemo } from "react";

import {
  InputLabel,
  InputRadio,
  InputRadioProps,
  InputWrapper
} from "../atoms";

export type FormFieldRadioProps = Omit<InputRadioProps, "id"> & {
  id: string;
  label?: string;
  error?: string;
};

/**
 * An opinonated implementation of the various Input components
 * to render text fields
 */
const FormFieldRadioFC = forwardRef<HTMLInputElement, FormFieldRadioProps>(
  function FormFieldRadioFC({ id, label, error, ...restInputProps }, ref) {
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
        <InputRadio id={id} {...restInputProps} ref={ref}>
          {Label}
        </InputRadio>
      </InputWrapper>
    );
  }
);

export const FormFieldRadio = memo(FormFieldRadioFC);
