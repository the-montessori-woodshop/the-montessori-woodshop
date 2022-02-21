import { forwardRef } from "react";

export type RouteWrapperProps = JSX.IntrinsicElements["div"];

export const RouteWrapper = forwardRef<HTMLDivElement, RouteWrapperProps>(
  function RouteWrapper({ children, style, className, ...restProps }, ref) {
    return (
      <div
        style={{ minHeight: "300px" }}
        className={className}
        ref={ref}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);
