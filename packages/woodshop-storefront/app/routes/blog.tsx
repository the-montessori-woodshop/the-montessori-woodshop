import { getPageTitle } from "~/utils/getPageTitle";
import type { MetaFunction } from "@remix-run/cloudflare";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return { title: getPageTitle("Blog") };
};

export default function BlogRoute() {
  return (
    <div>
      BlogRoute
      <Outlet />
    </div>
  );
}
