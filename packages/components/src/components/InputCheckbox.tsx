import "./InputCheckbox.scss";

import { Checkmark } from "@woodshop/icons";
import React, { forwardRef, memo } from "react";

import { makeClass } from "../theme";
import { Icon } from "./Icon";

export type InputCheckboxProps = JSX.IntrinsicElements["input"];

export const InputCheckboxFC = forwardRef<HTMLInputElement, InputCheckboxProps>(
  function InputCheckboxFC({ className, children, ...restProps }, ref) {
    return (
      <div className={makeClass(undefined, "GMi0Qu")}>
        <input
          type="checkbox"
          className={makeClass(className, "tKJfta")}
          {...restProps}
          ref={ref}
        />
        <span>
          <Icon cxTitle="checkbox-check" cxColor="white" cxSize={16}>
            <Checkmark />
          </Icon>
        </span>
        {children}
      </div>
    );
  }
);

export const InputCheckbox = memo(InputCheckboxFC);
