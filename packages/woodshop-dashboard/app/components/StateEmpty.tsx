import { TypographyCopy, TypographyHeading } from "@woodshop/components";
import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./StateEmtpy.css";

export type StateEmtpyPrps = JSX.IntrinsicElements["div"] & {
  title: string;
  description: string;
  children: ReactNode;
};

export const StateEmtpy = forwardRef<HTMLDivElement, StateEmtpyPrps>(
  function StateEmpty(
    { children, title, className, description, ...restProps },
    ref
  ) {
    return (
      <div {...restProps} className={clsx(className, "TKizo7F7045")}>
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
      </div>
    );
  }
);
