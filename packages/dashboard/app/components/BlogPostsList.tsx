import { GET_PostsApiResponse } from "@woodshop/api";
import { Illustration } from "@woodshop/components";
import { SearchingFoundNothing } from "@woodshop/illustrations";
import { FC } from "react";

import { StateEmtpy } from "./StateEmpty";

export type BlogPostListProps = {
  data: GET_PostsApiResponse;
};

export const BlogPostList: FC<BlogPostListProps> = ({ data }) => {
  console.log(data);
  if (!data) {
    return null;
  }
  if (data?.length === 0) {
    return (
      <StateEmtpy
        title="Whoops... No Posts!"
        description="Posts either don't exist matching that filtering criteria or no posts exist. Either way, get writing!"
      >
        <Illustration cxTitle="no-posts-yet" cxSize={400}>
          <SearchingFoundNothing />
        </Illustration>
      </StateEmtpy>
    );
  }
  return null;
};
