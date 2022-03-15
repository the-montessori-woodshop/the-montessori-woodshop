import React, { forwardRef, memo } from "react";

import { InputText, InputTextProps } from "./InputText";

export type InputSearchProps = Omit<InputTextProps, "type">;

const InputSearchFC = forwardRef<HTMLInputElement, InputSearchProps>(
  function InputSearchFC(props, ref) {
    return <InputText type="search" {...props} ref={ref} />;
  }
);

export const InputSearch = memo(InputSearchFC);
