import { Breadcrumb } from "~/components/breadcrumb/Breadcrumb";
import { AppBlog } from "~/features/blog";

export const handle = {
  breadcrumb: () => {
    return (
      <Breadcrumb to="/blog" end>
        Blog
      </Breadcrumb>
    );
  },
};

export default AppBlog;
