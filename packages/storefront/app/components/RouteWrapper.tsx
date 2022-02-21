import { forwardRef } from "react";
import styled from "styled-components";

export type RouteWrapperProps = JSX.IntrinsicElements["div"];

const SRouteWrapper = styled.div`
  min-height: calc(100vh - var(--navbar-height));
`;

export const RouteWrapper = forwardRef<HTMLDivElement, RouteWrapperProps>(
  function RouteWrapper({ children, style, ...restProps }, ref) {
    return (
      <SRouteWrapper {...restProps} ref={ref}>
        {children}
      </SRouteWrapper>
    );
  }
);
