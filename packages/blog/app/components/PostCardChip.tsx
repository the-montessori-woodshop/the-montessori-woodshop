import { FC } from "react";

import { Chip } from "./Chip";

export const PostCardChip: FC<{ published: boolean | undefined }> = ({
  published,
}) => {
  return (
    <Chip variant={published ? "published" : "draft"}>
      {published ? "Published" : "Draft"}
    </Chip>
  );
};
