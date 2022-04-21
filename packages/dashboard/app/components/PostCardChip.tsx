import type { FC } from "react";

import { Chip } from "./Chip";

export const PostCardChip: FC<{ published: boolean | undefined }> = ({
  published,
}) => {
  return (
    <Chip cxVariant={published ? "published" : "draft"}>
      {published ? "Published" : "Draft"}
    </Chip>
  );
};
