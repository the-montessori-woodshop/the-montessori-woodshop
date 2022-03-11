import client from "~/api";
import { useLoaderData, type LoaderFunction, Outlet } from "remix";
import {
  FormFieldSearch,
  makeRem,
  TypographyCopy,
  TypographyHeading,
} from "@woodshop/components";
import styled from "@emotion/styled";
import { BlogPostList } from "~/components/BlogPostList";
import { BlogPostListItem } from "~/components/BlogPostListItem";
import { BlogPostListItemLink } from "~/components/BlogPostListItemLink";
import { PostCardChip } from "~/components/PostCardChip";
import { FC } from "react";

import { Post } from "@woodshop/api/client";

export const loader: LoaderFunction = async () => {
  const data = await client.post.getPosts();
  return data;
};

const SGrid = styled.div`
  display: grid;
  grid-template-columns: ${makeRem(300)} 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  width: 100%;
`;

const SDiv = styled.div`
  padding: 0 ${makeRem(16)};
  padding-bottom: ${makeRem(20)};
  border-bottom: ${makeRem(1)} solid var(--color-grey3);
`;

const SArticle = styled.article`
  display: flex;
  flex-direction: column;
`;

const SSection = styled.section`
  background: var(--color-grey2);
  padding: ${makeRem(24)};
`;

const BlogPostLi: FC<Post> = (blogPost) => {
  return (
    <BlogPostListItem key={blogPost.id}>
      <BlogPostListItemLink to={`/posts/${blogPost.id}`}>
        <div>
          <PostCardChip published={blogPost.published} />
        </div>
        <TypographyHeading
          cxVariant="h6"
          cxNode="div"
          style={{
            margin: 0,
            fontWeight: "bold",
          }}
        >
          {blogPost.title}
        </TypographyHeading>
        <TypographyCopy
          style={{
            fontSize: makeRem(12),
          }}
        >
          {blogPost.content}
        </TypographyCopy>
      </BlogPostListItemLink>
    </BlogPostListItem>
  );
};

export default function Posts() {
  const { data } =
    useLoaderData<Awaited<ReturnType<typeof client.post.getPosts>>>();

  return (
    <SGrid>
      <SArticle>
        <SDiv>
          <FormFieldSearch
            id="search-for-blog-posts"
            placeholder="Search for blog pots..."
          />
        </SDiv>
        <BlogPostList>
          {data?.map((blogPost) => (
            <BlogPostLi key={blogPost.id} {...blogPost} />
          ))}
        </BlogPostList>
      </SArticle>
      <SSection>
        <Outlet />
      </SSection>
    </SGrid>
  );
}
