import styled from "@emotion/styled";
import { makeRem } from "@woodshop/components";

export const PostCard = styled.div`
  height: 100%;
  width: 100%;
  background: var(--color-white);
  border-radius: ${makeRem(2)};
  display: flex;
  flex-direction: column;
`;
