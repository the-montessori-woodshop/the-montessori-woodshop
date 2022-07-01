import { Breadcrumb } from "~/components/breadcrumb/Breadcrumb";
import { AppReviews } from "~/features/reviews";

export const handle = {
  breadcrumb: () => {
    return (
      <Breadcrumb to="/reviews" end>
        Reviews
      </Breadcrumb>
    );
  },
};

export default AppReviews;
