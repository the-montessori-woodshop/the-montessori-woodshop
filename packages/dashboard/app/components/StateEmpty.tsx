import { TypographyCopy, TypographyHeading } from "@woodshop/components";
import type { ReactNode } from "react";
import { forwardRef } from "react";
import styled from "styled-components";

export type StateEmtpyPrps = {
  title: string;
  description: string;
  children: ReactNode;
};

const SDiv = styled.div`
  text-align: center;
  * {
    margin-left: auto;
    margin-right: auto;
    max-width: 65ch;
  }
`;

export const StateEmtpy = forwardRef<HTMLDivElement, StateEmtpyPrps>(
  function StateEmpty({ children, title, description, ...restProps }, ref) {
    return (
      <SDiv {...restProps}>
        {/* @ts-ignore */}
        {children}
        <div>
          <TypographyHeading
            cxVariant="h3"
            cxNode="h2"
            style={{
              marginTop: 0,
            }}
          >
            {title}
          </TypographyHeading>
          <TypographyCopy>{description}</TypographyCopy>
        </div>
      </SDiv>
    );
  }
);
