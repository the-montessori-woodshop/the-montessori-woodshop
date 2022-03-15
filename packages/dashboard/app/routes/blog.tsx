import { Outlet } from "remix";

export default function BlogRoute() {
  return (
    <>
      blog header
      <Outlet />
    </>
  );
}
