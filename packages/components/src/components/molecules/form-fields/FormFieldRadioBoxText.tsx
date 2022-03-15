import { styled } from "@linaria/react";
import React, { forwardRef } from "react";

import {
  TypographyCopy,
  TypographyCopyProps
} from "../../atoms/typography/TypographyCopy";

const STyp = styled(TypographyCopy)`
  font-weight: normal;
  line-height: initial !important;
`;

export type FormFieldRadioBoxTextProps = TypographyCopyProps;

export const FormFieldRadioBoxText = forwardRef<
  HTMLDivElement,
  FormFieldRadioBoxTextProps
>(function FormFieldRadioBoxText({ children, ...props }, ref) {
  return (
    <STyp
      cxVariant="body1"
      cxColor="textPrimary"
      cxNode="span"
      {...props}
      ref={ref}
    >
      {children}
    </STyp>
  );
});
