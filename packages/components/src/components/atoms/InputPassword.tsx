import { Lock } from "@woodshop/icons";
import React, { forwardRef, memo } from "react";

import { InputText, InputTextProps } from "./InputText";

export type InputPasswordProps = Omit<InputTextProps, "type" | "css">;

const InputPasswordFC = forwardRef<HTMLInputElement, InputPasswordProps>(
  function InputPasswordFC(props, ref) {
    return <InputText type="password" {...props} ref={ref} StartIcon={Lock} />;
  }
);

export const InputPassword = memo(InputPasswordFC);
