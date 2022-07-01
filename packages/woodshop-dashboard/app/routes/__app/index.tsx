import { Breadcrumb } from "~/components/breadcrumb/Breadcrumb";
import { AppIndex } from "~/features/app.index";

export const handle = {
  breadcrumb: () => {
    return (
      <Breadcrumb to="/" end>
        Dashboard
      </Breadcrumb>
    );
  },
};

export default AppIndex;
