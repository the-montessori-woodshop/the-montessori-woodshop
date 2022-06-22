import { makeRem } from "@woodshop/components";
import styled from "styled-components";

export const TableBodyTR = styled.div`
  height: 100%;
  border-bottom: ${makeRem(1)} solid var(--color-grey2);
  padding: 0 ${makeRem(16)};
`;

export const TableBodyTD = styled.div`
  display: flex;
  justify-content: center;
`;

export const TableBodyTDContent = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
