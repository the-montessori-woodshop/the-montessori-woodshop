import { makeRem } from "@woodshop/components";
import { PageLayoutPane } from "~/components/page-layout";
import styled from "styled-components";

export const Summary = styled(PageLayoutPane)`
  background: var(--color-grey2);
  height: 100%;
  width: 100%;
  width: ${makeRem(380)};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background: inherit;
    right: 0;
    left: 100%;
    width: ${makeRem(1000)};
    top: 0;
    bottom: 0;
  }
`;
