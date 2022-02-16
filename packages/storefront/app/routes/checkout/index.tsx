import { Outlet } from "remix";

export default function CheckoutNested() {
  return (
    <div>
      checkout nested
      <Outlet />
    </div>
  );
}
