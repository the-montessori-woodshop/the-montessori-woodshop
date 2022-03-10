import { TypographyCopy, makeRem } from "@woodshop/components";
import { forwardRef } from "react";
import styled from "styled-components";

const SChip = styled.div`
  padding: 0 ${makeRem(20)};
  height: ${makeRem(24)};
  border-radius: ${makeRem(8)};
`;

const STyp = styled(TypographyCopy)`
  font-weight: bold;
  font-size: ${makeRem(10)} !important;
  line-height: ${makeRem(24)} !important;
  text-transform: uppercase;
`;

export type ChipProps = Record<string, unknown>;

export const Chip = forwardRef<HTMLDivElement, ChipProps>(function Chip(
  { children, ...restProps },
  ref
) {
  return (
    <SChip {...restProps} ref={ref}>
      <STyp cxVariant="caption">{children}</STyp>
    </SChip>
  );
});
