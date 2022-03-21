import { styled } from "@linaria/react";
import React from "react";
import { forwardRef } from "react";

import { makeRem } from "../../../theme";

const SLabel = styled.label`
  width: 100%;
  display: block;
  height: ${makeRem(200)};
  border: ${makeRem(1)} solid var(--color-grey3);
  background-color: var(--color-grey2);
  border-radius: ${makeRem(4)};
  z-index: 10;

  input {
    height: 100%;
    width: 100%;
    z-index: 10;
    visibility: hidden;
  }
`;

export type InputFileProps = JSX.IntrinsicElements["input"];

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
  function InputFile({ style, ...restProps }, ref) {
    return (
      <SLabel style={style}>
        <input {...restProps} type="file" ref={ref} />
      </SLabel>
    );
  }
);
