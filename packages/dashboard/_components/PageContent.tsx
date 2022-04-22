import { makeRem } from "@woodshop/components";
import styled from "styled-components";

export const PageContent = styled.div`
  padding: 0 ${makeRem(32)};

  &.main {
    flex: 1;
    overflow-y: auto;
  }
`;
