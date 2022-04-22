import styled from "styled-components";

import { ImageListItem } from "./ImageListItem";

export const ImageList = styled.ul`
  display: flex;

  & > ${ImageListItem} {
    width: 25%;
  }
`;
