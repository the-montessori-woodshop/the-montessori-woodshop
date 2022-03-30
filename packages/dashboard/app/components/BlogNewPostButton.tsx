import { ButtonContent } from "@woodshop/components";
import { FC } from "react";
import { Link } from "remix";

export const BlogNewPostButton: FC = () => {
  return (
    <Link to="/blog/editor">
      <ButtonContent cxVariant="contained" cxColor="primary" cxSize="small">
        New Post
      </ButtonContent>
    </Link>
  );
};
