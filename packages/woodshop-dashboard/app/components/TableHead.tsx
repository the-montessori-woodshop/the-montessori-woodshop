import { TypographyCopy } from "@woodshop/components";
import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";
import type { TableHeaderProps } from "react-table";

export type TableHeadProps = JSX.IntrinsicElements["div"];

export const TableHead = forwardRef<HTMLDivElement, TableHeadProps>(
  function TableHead({ className, children, ...restProps }, ref) {
    return (
      <div
        {...restProps}
        ref={ref}
        className={clsx(className, "g0oETy8", "table-head")}
      >
        {children}
      </div>
    );
  }
);

export const TableHeadTH = forwardRef<
  HTMLDivElement,
  TableHeaderProps & { children: ReactNode }
>(function TableHeadTH({ children, className, ...restProps }, ref) {
  return (
    <div
      {...restProps}
      ref={ref}
      className={clsx(className, "g0oETy8", "table-head-th")}
    >
      <div className={clsx("g0oETy8", "table-head-th-content")}>
        <TypographyCopy
          cxVariant="caption"
          style={{
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {children}
        </TypographyCopy>
      </div>
    </div>
  );
});
