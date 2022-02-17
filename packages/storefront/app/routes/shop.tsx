import { getPageTitle } from "~/utils/getPageTitle";
import { MetaFunction, Outlet } from "remix";

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
