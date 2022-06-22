import { makeRem } from "@woodshop/components";
import styled from "styled-components";

export const PageLayoutPaneFooter = styled.div`
  background: var(--color-white);
  box-shadow: 0 -4px 10px 2px rgba(214, 214, 214, 0.5);
  padding-left: ${makeRem(24)};
  padding-right: ${makeRem(24)};
  height: ${makeRem(80)};
  display: flex;
  align-items: center;
`;
