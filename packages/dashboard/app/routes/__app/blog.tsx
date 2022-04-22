import { Breadcrumb } from "~/components/Breadcrumb";
import { AppBlog } from "~/features/app.blog";

export const links = AppBlog.links;

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
