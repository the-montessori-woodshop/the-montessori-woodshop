import { forwardRef } from "react";
import styled from "styled-components";

export type RouteWrapperProps = JSX.IntrinsicElements["div"] & {
  full?: boolean;
};

const SRouteWrapper = styled.div<{ $full: boolean }>`
  min-height: calc(100vh - var(--navbar-height));
  padding-top: var(--navbar-height);
  height: ${({ $full }) => ($full ? `100vh` : "initial")};
`;

export const RouteWrapper = forwardRef<HTMLDivElement, RouteWrapperProps>(
  function RouteWrapper({ children, style, full = false, ...restProps }, ref) {
    return (
      <SRouteWrapper {...restProps} ref={ref} $full={full}>
        {children}
      </SRouteWrapper>
    );
  }
);
