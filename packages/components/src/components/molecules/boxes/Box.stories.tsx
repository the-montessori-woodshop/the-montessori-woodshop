import React from "react";

import { Box } from "./Box";

export default {
  title: "Molocules / Box"
};

export const PlainBox = () => {
  return <Box>this is a box</Box>;
};

export const WithTitle = () => {
  return <Box cxTitle="this is the box title">this is a box</Box>;
};

export const WithSubtitle = () => {
  return (
    <Box cxTitle="this is the box title" cxSubtitle="this is the box subtitle">
      this is a box
    </Box>
  );
};
