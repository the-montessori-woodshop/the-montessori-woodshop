import { Breadcrumb } from "~/components/breadcrumb/Breadcrumb";
import type { UseMatchesMatch } from "~/types/useMatches";

export const handle = {
  breadcrumb: (data: UseMatchesMatch) => {
    return (
      <>
        <Breadcrumb to={`/blog/editor/${data.params?.id}/images`} end>
          Images
        </Breadcrumb>
      </>
    );
  },
};

export default function BlogImagesPageImages() {
  return <div>tab - Images</div>;
}
