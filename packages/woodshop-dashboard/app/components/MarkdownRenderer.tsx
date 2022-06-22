import type { Post } from "@woodshop/api";
import { Blog } from "@woodshop/components";
import type { FC } from "react";

import { useMarkdownRendererContext } from "./MarkdownRenderer.context";

export const MarkdownRenderer: FC<{ post: Post }> = ({
  post: { content, ...restPost },
}) => {
  const { markdownSource } = useMarkdownRendererContext();

  return <Blog {...restPost} content={markdownSource} />;
};
