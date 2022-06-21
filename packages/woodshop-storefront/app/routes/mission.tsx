import { getPageTitle } from "~/utils/getPageTitle";
import type { MetaFunction} from "remix";
import { Outlet } from "remix";

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
