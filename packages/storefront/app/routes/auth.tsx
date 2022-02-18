import { getPageTitle } from "~/utils/getPageTitle";
import { MetaFunction, Outlet } from "remix";

export const meta: MetaFunction = () => {
  return { title: getPageTitle("Blog") };
};

export default function AuthRoute() {
  return (
    <div>
      AuthRoute
      <Outlet />
    </div>
  );
}
