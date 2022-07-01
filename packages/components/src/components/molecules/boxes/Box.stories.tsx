import React from "react";

import { Box } from "./Box";
import { BoxContent } from "./BoxContent";
import { BoxHeader } from "./BoxHeader";

export default {
  title: "Molocules / Box"
};

export const PlainBox = () => {
  return (
    <Box>
      <BoxContent>this is a box</BoxContent>
    </Box>
  );
};

export const WithTitle = () => {
  return (
    <Box>
      <BoxHeader cxTitle="this is the box title" />
      <BoxContent>this is a box</BoxContent>
    </Box>
  );
};

export const WithSubtitle = () => {
  return (
    <Box>
      <BoxHeader
        cxTitle="this is the box title"
        cxSubtitle="this is the box subtitle"
      />
      <BoxContent>this is a box</BoxContent>
    </Box>
  );
};

export const LineSeparatedWTitle = () => {
  return (
    <Box>
      <BoxHeader cxTitle="this is the box title" />
      <BoxContent cxVariant="line-separated">this is a box</BoxContent>
    </Box>
  );
};

export const LineSeparatedWSubtitle = () => {
  return (
    <Box>
      <BoxHeader
        cxTitle="this is the box title"
        cxSubtitle="this is the box subtitle"
      />
      <BoxContent cxVariant="line-separated">this is a box</BoxContent>
    </Box>
  );
};

export const Dense = () => {
  return (
    <Box>
      <BoxContent cxVariant="dense">this is a dense box</BoxContent>
    </Box>
  );
};

export const DenseWithTitle = () => {
  return (
    <Box>
      <BoxHeader cxTitle="this is the box title" />
      <BoxContent cxVariant="dense">this is a dense box</BoxContent>
    </Box>
  );
};

export const DenseWithTitleAndSubtitle = () => {
  return (
    <Box>
      <BoxHeader
        cxTitle="this is the box title"
        cxSubtitle="this is the box subtitle"
      />
      <BoxContent cxVariant="dense">this is a dense box</BoxContent>
    </Box>
  );
};

export const NoGutters = () => {
  return (
    <Box>
      <BoxContent cxVariant="no-gutters">gutterless box</BoxContent>
    </Box>
  );
};

export const NoGuttersWithTitle = () => {
  return (
    <Box>
      <BoxHeader cxTitle="this is the box title" />
      <BoxContent cxVariant="no-gutters">gutterless box</BoxContent>
    </Box>
  );
};

export const NoGuttersWithTitleAndSubtitle = () => {
  return (
    <Box>
      <BoxHeader
        cxTitle="this is the box title"
        cxSubtitle="this is the box subtitle"
      />
      <BoxContent cxVariant="no-gutters">gutterless box</BoxContent>
    </Box>
  );
};
