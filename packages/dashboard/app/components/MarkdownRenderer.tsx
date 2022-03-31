import MarkdownIt from "markdown-it";
import { FC } from "react";

import { useMarkdownRendererContext } from "./MarkdownRenderer.context";

const md = new MarkdownIt();

export const MarkdownRenderer: FC = () => {
  const { markdownSource } = useMarkdownRendererContext();

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: md.render(markdownSource),
      }}
    />
  );
};
