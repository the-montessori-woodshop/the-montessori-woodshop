import { styled } from "@linaria/react";

import { makeRem } from "../../../theme/theme.utils";

export const DescriptionListGroup = styled.div`
  background: inherit;

  & + & {
    margin-top: ${makeRem(38)};
  }
`;
