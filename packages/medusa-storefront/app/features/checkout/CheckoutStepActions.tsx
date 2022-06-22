import { ButtonGroup, makeRem } from "@woodshop/components";
import styled from "styled-components";

export const CheckoutStepActions = styled(ButtonGroup).attrs({
  cxLayout: "inline-fill",
})`
  margin-top: ${makeRem(60)};
`;
