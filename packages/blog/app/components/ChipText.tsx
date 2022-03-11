import styled from "@emotion/styled";
import { TypographyCopy, makeRem } from "@woodshop/components";

export const ChipText = styled(TypographyCopy)`
  font-weight: bold;
  font-size: ${makeRem(10)} !important;
  line-height: ${makeRem(24)} !important;
  text-transform: uppercase;
`;
