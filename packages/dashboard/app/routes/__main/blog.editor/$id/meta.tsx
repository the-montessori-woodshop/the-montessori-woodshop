import { Breadcrumb } from "~/components/Breadcrumb";
import { useBlogEditorSubRouteData } from "~/features/blog-editor/useBlogEditorSubRouteData";
import { UseMatchesMatch } from "~/types/useMatches";

export const handle = {
  breadcrumb: (data: UseMatchesMatch) => {
    return (
      <>
        <Breadcrumb to={`/blog/editor/${data.params?.id}/meta`} end>
          Meta
        </Breadcrumb>
      </>
    );
  },
};

export default function BlogEditorPageIndex() {
  const data = useBlogEditorSubRouteData();

  return <div>{JSON.stringify(data, null, 4)}</div>;
}
