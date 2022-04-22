import type { LinksFunction } from "@remix-run/cloudflare";
import { Breadcrumb } from "~/components/Breadcrumb";
import { useMarkdownRendererContext } from "~/components/MarkdownRenderer.context";
import { useBlogEditorSubRouteData } from "~/features/blog-editor/useBlogEditorSubRouteData";
import { createRouteLinkStyles } from "~/features/routes/routes.createRouteLinkStyles";
import type { UseMatchesMatch } from "~/types/useMatches";

import styles from "./editor.css";

export const links: LinksFunction = () => [createRouteLinkStyles(styles)];

export const handle = {
  breadcrumb: (data: UseMatchesMatch) => {
    return (
      <>
        <Breadcrumb to={`/blog/editor/${data.params?.id}/editor`} end>
          Editor
        </Breadcrumb>
      </>
    );
  },
};

export default function Page() {
  const { setMarkdownSource } = useMarkdownRendererContext();
  const data = useBlogEditorSubRouteData();

  return (
    <div className="editor-container">
      <textarea
        name="content"
        defaultValue={data?.content || ""}
        onChange={(e) => setMarkdownSource(e.target.value)}
      />
    </div>
  );
}
