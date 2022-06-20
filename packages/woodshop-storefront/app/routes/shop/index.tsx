import { getPageTitle } from "~/utils/getPageTitle";
import { MetaFunction, Outlet } from "remix";

export default function ShopIndex() {
  return (
    <div>
      ShopIndex
      <Outlet />
    </div>
  );
}
