import styled from "@emotion/styled";
import { makeRem } from "@woodshop/components";
import { NavLink } from "remix";

export const BlogPostListItemLink = styled(NavLink)`
  padding: ${makeRem(16)} ${makeRem(24)};
  display: block;

  &.active {
    background: var(--color-grey2);
  }
`;
