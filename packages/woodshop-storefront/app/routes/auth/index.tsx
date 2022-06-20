import { Outlet } from "remix";

export default function AuthIndex() {
  return (
    <div>
      AuthIndex
      <Outlet />
    </div>
  );
}
