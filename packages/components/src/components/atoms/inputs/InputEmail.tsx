import React, { forwardRef, memo } from "react";

import { InputText, InputTextProps } from "./InputText";

export type InputEmailProps = Omit<InputTextProps, "type">;

const InputEmailFC = forwardRef<HTMLInputElement, InputEmailProps>(
  function InputEmailFC(props, ref) {
    return <InputText type="email" {...props} ref={ref} />;
  }
);

export const InputEmail = memo(InputEmailFC);
