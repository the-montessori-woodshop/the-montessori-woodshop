import type { MetaFunction } from "@remix-run/cloudflare";
import { Outlet } from "@remix-run/react";
import { getPageTitle } from "~/utils/getPageTitle";

export const meta: MetaFunction = () => {
  return { title: getPageTitle("Shop") };
};

export default function ShopRoute() {
  return (
    <div>
      ShopRoute
      <Outlet />
    </div>
  );
}
