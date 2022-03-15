import React, { forwardRef, memo } from "react";

import { InputText, InputTextProps } from "./InputText";

export type InputPasswordProps = Omit<InputTextProps, "type" | "css">;

const InputPasswordFC = forwardRef<HTMLInputElement, InputPasswordProps>(
  function InputPasswordFC(props, ref) {
    return <InputText type="password" {...props} ref={ref} />;
  }
);

export const InputPassword = memo(InputPasswordFC);
