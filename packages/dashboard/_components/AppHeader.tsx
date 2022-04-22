import { makeRem } from "@woodshop/components";
import styled from "styled-components";

export const AppHeader = styled.header`
  height: ${makeRem(100)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${makeRem(24)};
`;
