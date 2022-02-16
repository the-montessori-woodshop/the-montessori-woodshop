import { Outlet } from "remix";

export default function BlogRoute() {
  return (
    <div>
      BlogRoute
      <Outlet />
    </div>
  );
}
