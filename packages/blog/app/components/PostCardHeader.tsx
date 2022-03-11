import styled from "@emotion/styled";
import { makeRem } from "@woodshop/components";

export const PostCardHeader = styled.header`
  height: ${makeRem(60)};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${makeRem(24)};
  border-bottom: ${makeRem(1)} solid var(--color-grey3);
`;
