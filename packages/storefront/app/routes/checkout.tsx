import { getPageTitle } from "~/utils/getPageTitle";
import { MetaFunction, Outlet } from "remix";

export const meta: MetaFunction = () => {
  return { title: getPageTitle("Checkout") };
};

export default function CheckoutRoute() {
  return (
    <div>
      CheckoutRoute
      <Outlet />
    </div>
  );
}
