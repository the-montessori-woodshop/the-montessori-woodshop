import { Breadcrumb } from "~/components/breadcrumb/Breadcrumb";
import type { UseMatchesMatch } from "~/types/useMatches";

export const handle = {
  breadcrumb: (data: UseMatchesMatch) => {
    return (
      <>
        <Breadcrumb to={`/blog/editor/${data.params?.id}/actions`} end>
          Actions
        </Breadcrumb>
      </>
    );
  },
};

export default function BlogActionsPageIndex() {
  return <div>tab - actions</div>;
}
