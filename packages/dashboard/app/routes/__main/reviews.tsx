import { Breadcrumb } from "~/components/Breadcrumb";
import { Outlet } from "remix";

export const handle = {
  breadcrumb: () => {
    return (
      <Breadcrumb to="/reviews" end>
        Reviews
      </Breadcrumb>
    );
  },
};

export default function ReviewsLayout() {
  return (
    <div>
      reviews layout
      <Outlet />
    </div>
  );
}
