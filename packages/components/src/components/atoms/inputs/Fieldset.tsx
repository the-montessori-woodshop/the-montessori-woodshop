import { styled } from "@linaria/react";
import React, { ReactNode } from "react";
import { forwardRef } from "react";

import { makeRem } from "../../../theme/theme.utils";
import { TypographyCopy } from "../typography/TypographyCopy";

export type FieldsetProps = {
  cxLegend: string;
  cxDisplayLegend?: boolean;
  children: ReactNode;
};

const SFieldset = styled.fieldset``;

const SLegend = styled.legend``;

const SCopy = styled(TypographyCopy)`
  font-weight: 600;
  margin-bottom: ${makeRem(8)};
`;

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  function Fieldset(
    { cxLegend, cxDisplayLegend, children, ...restProps },
    ref
  ) {
    return (
      <SFieldset {...restProps} ref={ref}>
        <SLegend style={{ display: cxDisplayLegend ? "initial" : "none" }}>
          <SCopy cxVariant="body1">{cxLegend}</SCopy>
        </SLegend>
        {children}
      </SFieldset>
    );
  }
);
