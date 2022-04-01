import MarkdownIt from "markdown-it";
import { FC } from "react";
import { BlogContent } from "~/features/blog/BlogContent";

import { useMarkdownRendererContext } from "./MarkdownRenderer.context";

const md = new MarkdownIt();

export const MarkdownRenderer: FC = () => {
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
