import { getPageTitle } from "~/utils/getPageTitle";
import type { MetaFunction} from "remix";
import { Outlet } from "remix";

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
