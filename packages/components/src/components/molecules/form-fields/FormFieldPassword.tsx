import React, { forwardRef, memo, useMemo } from "react";

import { InputHelp } from "../../atoms/inputs/InputHelp";
import { InputLabel } from "../../atoms/inputs/InputLabel";
import {
  InputPassword,
  InputPasswordProps
} from "../../atoms/inputs/InputPassword";
import { InputWrapper } from "../../atoms/inputs/InputWrapper";

export type FormFieldPasswordProps = Omit<
  InputPasswordProps,
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
export const FormFieldPasswordFC = forwardRef<
  HTMLInputElement,
  FormFieldPasswordProps
>(function FormFieldPasswordFC(
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
      <InputPassword id={id} {...restInputProps} ref={ref} />
      <InputHelp error={!!error}>{error || help || null}</InputHelp>
    </InputWrapper>
  );
});

export const FormFieldPassword = memo(FormFieldPasswordFC);
