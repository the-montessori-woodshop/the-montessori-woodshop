import { useMatches } from "@remix-run/react/dist";
import { TopNavList } from "@woodshop/components";
import { BreadcrumbSeparator } from "~/components/breadcrumb";
import type { FC } from "react";
import { Fragment } from "react";

export const AppLayoutBreadcrumb: FC = () => {
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
            {match.handle?.breadcrumb(match)}
            {index !== arr.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
    </TopNavList>
  );
};
