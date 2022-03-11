import styled from "@emotion/styled";
import { makeRem } from "@woodshop/components";

export type ChipProps = {
  variant: "draft" | "published";
};

export const Chip = styled.div<ChipProps>`
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
