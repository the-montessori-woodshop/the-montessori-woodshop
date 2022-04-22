import { makeRem } from "@woodshop/components";
import styled from "styled-components";

export const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${makeRem(80)};
  margin-top: ${makeRem(16)};
  padding-left: ${makeRem(32)};
  padding-right: ${makeRem(32)};
`;
