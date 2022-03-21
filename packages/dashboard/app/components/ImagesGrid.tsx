import styled from "styled-components";

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-areas:
    "nav nav"
    "main-title edit-title"
    "main-content edit-content";
  overflow: hidden;
`;
