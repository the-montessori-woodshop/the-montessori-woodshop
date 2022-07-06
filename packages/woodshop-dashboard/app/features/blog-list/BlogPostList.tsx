import { Link } from "@remix-run/react";
import type { GET_PostsApiResponse } from "@woodshop/api";
import { Illustration, TypographyCopy } from "@woodshop/components";
import { SearchingFoundNothing } from "@woodshop/illustrations";
import { StateEmtpy } from "~/components/StateEmpty";
import clsx from "clsx";
import type { FC } from "react";

export type BlogPostListProps = {
  data: GET_PostsApiResponse;
};

export const BlogPostList: FC<BlogPostListProps> = ({ data }) => {
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
  return (
    <ul className={clsx("mU7l8h", "list")}>
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link to={`./editor/${post.id}`} className={clsx("mU7l8h", "item")}>
              <img
                src={
                  post.banner_img_url ||
                  "https://imagedelivery.net/2IBxNTNwVZBsFPqW0HdTRQ/ecbef0e9-a73d-4335-81f1-1781fa293600/public"
                }
                alt={post.banner_img_alt || post.id.toString()}
              />
              <div>
                <TypographyCopy
                  cxVariant="body1"
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {post.title}
                </TypographyCopy>
                <TypographyCopy cxVariant="body2" cxColor="textSecondary">
                  {post.prompt}
                </TypographyCopy>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
