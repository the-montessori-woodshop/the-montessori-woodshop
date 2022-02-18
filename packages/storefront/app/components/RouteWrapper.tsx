import { FC } from "react";

export const RouteWrapper: FC = ({ children }) => {
  return <div style={{ minHeight: "300px" }}>{children}</div>;
};
