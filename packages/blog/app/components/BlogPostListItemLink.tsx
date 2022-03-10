import { makeRem } from "@woodshop/components";
import { NavLink } from "remix";
import styled from "styled-components";

export const BlogPostListItemLink = styled(NavLink)`
  padding: ${makeRem(16)} ${makeRem(24)};
  display: block;

  &.active {
    background: var(--color-grey2);
  }
`;
