import { Breadcrumb } from "~/components/Breadcrumb";
import { UseMatchesMatch } from "~/types/useMatches";

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
