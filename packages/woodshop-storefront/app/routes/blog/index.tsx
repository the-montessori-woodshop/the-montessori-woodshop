import { Outlet } from "@remix-run/react";

export default function BlogIndex() {
  return (
    <div>
      BlogIndex
      <Outlet />
    </div>
  );
}
