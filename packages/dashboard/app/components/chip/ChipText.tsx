import { TypographyCopy } from "@woodshop/components";
import { createComponentStyle } from "~/components/utils/createComponentStyle";
import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./ChipText.css";

export type ChipTextProps = JSX.IntrinsicElements["div"] & {
  children: ReactNode;
};

export const ChipText = forwardRef<HTMLDivElement, ChipTextProps>(
  function ChipText({ className, children, ...restProps }, ref) {
    return (
      <TypographyCopy
        {...restProps}
        className={clsx(className, "chip-text")}
        ref={ref}
      >
        {children}
      </TypographyCopy>
    );
  }
);

ChipText.links = createComponentStyle(styles);
