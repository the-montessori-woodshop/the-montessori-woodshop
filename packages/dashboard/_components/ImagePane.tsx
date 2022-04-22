import { makeRem } from "@woodshop/components";
import styled from "styled-components";

export const ImagePane = styled.article`
  width: ${makeRem(500)};
  border-left: ${makeRem(1)} solid var(--color-grey2);
  background: var(--color-grey1);
  position: relative;
`;
