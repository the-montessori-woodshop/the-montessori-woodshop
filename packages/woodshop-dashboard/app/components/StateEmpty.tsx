import { TypographyCopy, TypographyHeading } from "@woodshop/components";
import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

export type StateEmtpyPrps = JSX.IntrinsicElements["div"] & {
  title: string;
  description: string;
  children: ReactNode;
  Action?: ReactNode;
};

export const StateEmtpy = forwardRef<HTMLDivElement, StateEmtpyPrps>(
  function StateEmpty(
    { children, title, className, description, Action, ...restProps },
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
        {Action && <div className="action">{Action}</div>}
      </div>
    );
  }
);
