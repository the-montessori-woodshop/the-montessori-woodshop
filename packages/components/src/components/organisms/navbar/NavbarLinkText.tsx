import React, { FC } from "react";

export type NavProps = Record<string, unknown>;

export const Nav: FC = ({ children }) => {
  return <nav>{children}</nav>;
};
