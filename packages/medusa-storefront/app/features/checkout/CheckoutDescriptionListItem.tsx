import { makeRem } from "@woodshop/components";
import styled from "styled-components";

export const CheckoutDescriptionListItem = styled.div`
  height: ${makeRem(44)};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 ${makeRem(16)};

  &:not(:last-child) {
    border-bottom: ${makeRem(1)} solid var(--color-grey3);
  }
`;
