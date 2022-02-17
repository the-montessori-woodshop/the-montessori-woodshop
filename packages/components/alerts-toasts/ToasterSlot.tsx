import styled from "styled-components";

import { makeRem } from "../../theme/theme.utils";

export const ToasterSlot = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: ${makeRem(16)};
  position: fixed;
  bottom: ${makeRem(16)};

  & > * {
    max-width: ${makeRem(360)};
    min-width: ${makeRem(360)};
  }
`;
