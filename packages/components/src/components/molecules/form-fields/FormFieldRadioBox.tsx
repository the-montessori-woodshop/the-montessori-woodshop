import "./FormFieldRadioBox.scss";

import React, { ReactNode, forwardRef, memo, useMemo } from "react";

import { makeClass } from "../../../theme";
import { InputRadio, InputRadioProps } from "../../atoms/InputRadio";
import { FormFieldRadioBoxText } from "./FormFieldRadioBoxText";

export type FormFieldRadioBoxProps = Omit<InputRadioProps, "id"> & {
  id: string;
  children: ReactNode;
  error?: string;
};

/**
 * An opinonated implementation of the various Input components
 * to render text fields
 */
const FormFieldRadioBoxFC = forwardRef<
  HTMLInputElement,
  FormFieldRadioBoxProps
>(function FormFieldRadioBoxFC(
  { id, className, children, error, ...restInputProps },
  ref
) {
  const Text = useMemo(() => {
    if (typeof children === "string") {
      return <FormFieldRadioBoxText>{children}</FormFieldRadioBoxText>;
    }
    return children;
  }, []);

  return (
    <label
      htmlFor={id}
      className={makeClass(className, "pk0ZQq", {
        error: !!error
      })}
    >
      <InputRadio id={id} {...restInputProps} ref={ref}>
        <span
          style={{
            display: "block",
            width: "100%"
          }}
        >
          {Text}
        </span>
        <div />
      </InputRadio>
    </label>
  );
});

export const FormFieldRadioBox = memo(FormFieldRadioBoxFC);
