import { makeRem } from "@woodshop/components";
import { forwardRef } from "react";
import styled from "styled-components";

export type RouteWrapperProps = JSX.IntrinsicElements["div"] & {
  full?: boolean;
};

const SRouteWrapper = styled.div<{ $full: boolean }>`
  height: 100%;
  & > * {
    max-width: ${makeRem(960)};
    margin: 0 auto;
  }
`;

export const RouteWrapper = forwardRef<HTMLDivElement, RouteWrapperProps>(
  function RouteWrapper({ children, full = false, ...restProps }, ref) {
    return (
      <SRouteWrapper {...restProps} ref={ref} $full={full}>
        {children}
      </SRouteWrapper>
    );
  }
);
