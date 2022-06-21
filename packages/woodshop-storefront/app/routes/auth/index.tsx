import { Outlet } from "@remix-run/react";

export default function AuthIndex() {
  return (
    <div>
      AuthIndex
      <Outlet />
    </div>
  );
}
