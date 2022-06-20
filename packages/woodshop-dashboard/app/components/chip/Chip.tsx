import { createComponentStyle } from "~/components/utils/createComponentStyle";
import clsx from "clsx";
import { forwardRef } from "react";

import styles from "./Chip.css";

export type ChipProps = JSX.IntrinsicElements["div"] & {
  cxVariant: "draft" | "published";
};

export const Chip = forwardRef<HTMLDivElement, ChipProps>(function Chip(
  { children, cxVariant, className, ...restProps },
  ref
) {
  return (
    <div
      {...restProps}
      className={clsx(className, "chip", cxVariant)}
      ref={ref}
    >
      {children}
    </div>
  );
});

Chip.links = createComponentStyle(styles);
