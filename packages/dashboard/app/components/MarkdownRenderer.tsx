import { Post } from "@woodshop/api";
import { Blog } from "~/features/blog/Blog";
import MarkdownIt from "markdown-it";
import { FC } from "react";

import { useMarkdownRendererContext } from "./MarkdownRenderer.context";

const md = new MarkdownIt();

export const MarkdownRenderer: FC<{ post: Post }> = ({
  post: { content, ...restPost },
}) => {
  const { markdownSource } = useMarkdownRendererContext();

  return <Blog {...restPost} content={markdownSource} />;
};
