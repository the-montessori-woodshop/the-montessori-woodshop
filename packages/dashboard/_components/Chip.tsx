import { makeRem } from "@woodshop/components";
import clsx from "clsx";
import { forwardRef } from "react";
import styled from "styled-components";

export type ChipProps = JSX.IntrinsicElements["div"] & {
  cxVariant: "draft" | "published";
};

export const SChip = styled.div`
  padding: 0 ${makeRem(20)};
  height: ${makeRem(24)};
  border-radius: ${makeRem(8)};

  &.draft {
    background: #f9aef8;
  }

  &.published {
    background: #e2fff9;
  }
`;

export const Chip = forwardRef<HTMLDivElement, ChipProps>(function Chip(
  { children, cxVariant, className, ...restProps },
  ref
) {
  return (
    <SChip className={clsx(className, cxVariant)} ref={ref}>
      {children}
    </SChip>
  );
});
