import { TypographyCopy, makeRem } from "@woodshop/components";
import styled from "styled-components";

export const ChipText = styled(TypographyCopy)`
  font-weight: bold;
  font-size: ${makeRem(10)} !important;
  line-height: ${makeRem(24)} !important;
  text-transform: uppercase;
`;
