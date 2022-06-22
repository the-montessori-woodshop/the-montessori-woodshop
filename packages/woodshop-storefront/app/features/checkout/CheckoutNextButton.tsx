import { Button, makeRem } from "@woodshop/components";
import styled from "styled-components";

export const CheckoutNextButton = styled(Button).attrs({
  cxVariant: "contained",
  cxColor: "primary",
})`
  height: ${makeRem(60)};
`;
