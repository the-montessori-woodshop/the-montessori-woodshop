import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { TypographyCopy } from "../../atoms/typography/TypographyCopy";

const SLHeader = styled.div`
  top: 0;
  position: sticky;
`;

export type ListHeaderProps = JSX.IntrinsicElements["div"] & {
  stickyTopDesktop?: number;
  stickyTopMobile?: number;
};

const ListHeader = forwardRef<HTMLDivElement, ListHeaderProps>(
  function ListHeader({ children, className, ...restProps }, ref) {
    return (
      <SLHeader {...restProps} className={clsx(className, {})} ref={ref}>
        <TypographyCopy
          cxVariant="body1"
          cxColor="textPrimary"
          style={{
            fontWeight: "bold"
          }}
        >
          {children}
        </TypographyCopy>
      </SLHeader>
    );
  }
);

export type DescriptionListGroupTitleProps = Pick<
  ListHeaderProps,
  "stickyTopDesktop" | "stickyTopMobile"
> & { children: string };

export const DescriptionListGroupTitle = forwardRef<
  HTMLDivElement,
  DescriptionListGroupTitleProps
>(function DescriptionListGroupTitle(props, ref) {
  return <ListHeader {...props} ref={ref} />;
});
