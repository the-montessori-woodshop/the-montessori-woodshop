import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

export type ImagesGridMainContentProps = JSX.IntrinsicElements["div"] & {
  children?: ReactNode;
};

export const ImagesGridMainContent = forwardRef<
  HTMLDivElement,
  ImagesGridMainContentProps
>(function ImagesGridMainContent({ className, children, ...restProps }, ref) {
  return (
    <div {...restProps} className={clsx(className, "main-content")} ref={ref}>
      {children}
    </div>
  );
});
