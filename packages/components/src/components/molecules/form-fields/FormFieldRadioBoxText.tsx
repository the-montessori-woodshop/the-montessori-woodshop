import "./FormFieldRadioBoxText.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme";
import {
  TypographyCopy,
  TypographyCopyProps
} from "../../atoms/TypographyCopy";

export type FormFieldRadioBoxTextProps = TypographyCopyProps;

export const FormFieldRadioBoxText = forwardRef<
  HTMLDivElement,
  FormFieldRadioBoxTextProps
>(function FormFieldRadioBoxText({ children, className, ...props }, ref) {
  return (
    <TypographyCopy
      cxVariant="body1"
      cxColor="textPrimary"
      cxNode="span"
      className={makeClass(className, "Q9chE")}
      {...props}
      ref={ref}
    >
      {children}
    </TypographyCopy>
  );
});
