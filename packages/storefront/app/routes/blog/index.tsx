import { Outlet } from "remix";

export default function BlogIndex() {
  return (
    <div>
      BlogIndex
      <Outlet />
    </div>
  );
}
