import { getPageTitle } from "~/utils/getPageTitle";
import type { MetaFunction } from "@remix-run/cloudflare";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return { title: getPageTitle("Mission") };
};

export default function MissionRoute() {
  return (
    <div>
      MissionRoute
      <Outlet />
    </div>
  );
}
