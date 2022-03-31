import { Breadcrumb } from "~/components/Breadcrumb";
import { Outlet } from "remix";

export const handle = {
  breadcrumb: () => {
    return (
      <Breadcrumb to="/" end>
        Dashboard
      </Breadcrumb>
    );
  },
};

export default function Index() {
  return (
    <div>
      dashboard layout
      <Outlet />
    </div>
  );
}
