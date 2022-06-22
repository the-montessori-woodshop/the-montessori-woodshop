import { makeRem } from "@woodshop/components";
import styled from "styled-components";

export const PageLayoutPaneBody = styled.div`
  flex: 1;
  position: relative;
  overflow-x: hidden;

  & > * {
    padding-left: ${makeRem(24)};
    padding-right: ${makeRem(24)};
  }
`;
