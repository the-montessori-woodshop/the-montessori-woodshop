import { GET_PostByIdApiResponse } from "@woodshop/api";
import { BlogContent } from "~/features/blog/BlogContent";
import MarkdownIt from "markdown-it";
import { FC } from "react";

import { useMarkdownRendererContext } from "./MarkdownRenderer.context";

const md = new MarkdownIt();

export const MarkdownRenderer: FC<{ blogPost: GET_PostByIdApiResponse }> = ({
  blogPost,
}) => {
  const { markdownSource } = useMarkdownRendererContext();

  return (
    <BlogContent>
      <div
        dangerouslySetInnerHTML={{
          __html: md.render(markdownSource),
        }}
      />
    </BlogContent>
  );
};
