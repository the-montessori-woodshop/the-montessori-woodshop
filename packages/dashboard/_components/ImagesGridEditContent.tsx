import { makeRem } from "@woodshop/components";
import styled from "styled-components";

export const ImagesGridEditContent = styled.div`
  grid-area: edit-content;
  width: ${makeRem(600)};
  border-left: ${makeRem(1)} solid var(--color-grey2);
  background: var(--color-grey1);
  position: relative;
`;
