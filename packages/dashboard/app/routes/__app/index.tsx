import { Breadcrumb } from "~/components/Breadcrumb";
import { AppIndex } from "~/features/app.index";

export const links = AppIndex.links;

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
