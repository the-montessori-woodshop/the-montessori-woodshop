import {
  Breadcrumb,
  BreadcrumbSeparator,
} from "~/components/breadcrumb/Breadcrumb";
import { AppBlogEditorRoute } from "~/features/app.blog-editor";
import type { UseMatchesMatch } from "~/types/useMatches";

export const handle = {
  breadcrumb: (data: UseMatchesMatch) => {
    return (
      <>
        <Breadcrumb to="/blog" end>
          Blog
        </Breadcrumb>
        <BreadcrumbSeparator />
        <Breadcrumb to={`/blog/editor/${data.params?.id}`}>
          {data.params?.id}
        </Breadcrumb>
      </>
    );
  },
};

export default AppBlogEditorRoute;