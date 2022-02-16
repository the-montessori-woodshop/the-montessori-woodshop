import React, { FC } from "react";

export type NavProps = Record<string, unknown>;

export const Nav: FC = ({ children }) => {
  return <div>{children}</div>;
};
