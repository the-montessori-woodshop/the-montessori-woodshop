import { makeRem } from "@woodshop/components";
import styled from "styled-components";

export const BlogLayout = styled.div`
  display: grid;
  grid-template-columns: ${makeRem(300)} 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  width: 100%;
`;

export const BlogLayoutSide = styled.article`
  display: flex;
  flex-direction: column;
  background: var(--color-grey2);
  width: 100%;
  padding: ${makeRem(24)} ${makeRem(32)};
`;

export const BlogLayoutMain = styled.section`
  padding: ${makeRem(24)};
`;
