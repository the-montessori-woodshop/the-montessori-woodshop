import React, { forwardRef, memo } from "react";

import { InputText, InputTextProps } from "./InputText";

export type InputNumberProps = Omit<InputTextProps, "type">;

const InputNumberFC = forwardRef<HTMLInputElement, InputNumberProps>(
  function InputNumberFC(props, ref) {
    return <InputText type="number" {...props} ref={ref} />;
  }
);

export const InputNumber = memo(InputNumberFC);
