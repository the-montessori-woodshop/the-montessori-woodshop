import { TopNavList } from "@woodshop/components";
import type { FC } from "react";
import { Fragment } from "react";
import { useMatches } from "remix";

import { BreadcrumbSeparator } from "./Breadcrumb";

export const TopNavBreadcrumb: FC = () => {
  const matches = useMatches();
  return (
    <TopNavList
      style={{
        display: "flex",
      }}
    >
      {matches
        .filter((match) => match.handle && match.handle.breadcrumb)
        .map((match, index, arr) => (
          <Fragment key={index}>
            {match.handle.breadcrumb(match)}
            {index !== arr.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
    </TopNavList>
  );
};
