import { TypographyHeading } from "@woodshop/components";
import styled from "styled-components";

export const EmptyStateTitle = styled(TypographyHeading).attrs({
  cxNode: "div",
  cxVariant: "h4",
})`
  text-align: center;
  margin-top: 0 !important;
`;
