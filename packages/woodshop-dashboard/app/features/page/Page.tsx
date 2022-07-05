import type { ReactNode } from "react";
import { forwardRef } from "react";

import { makeStyles } from "./page.utils";

export type PageProps = JSX.IntrinsicElements["div"] & {
  children: ReactNode;
};
export const Page = forwardRef<HTMLDivElement, PageProps>(function Page(
  { className, children, ...restProps },
  ref
) {
  return (
    <div
      {...restProps}
      className={makeStyles(className)("container")}
      ref={ref}
    >
      {children}
    </div>
  );
});
