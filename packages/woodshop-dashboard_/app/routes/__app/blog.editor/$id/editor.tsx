import type { LinksFunction } from "@remix-run/cloudflare/dist";
import { Breadcrumb } from "~/components/breadcrumb/Breadcrumb";
import { useMarkdownRendererContext } from "~/components/MarkdownRenderer.context";
import { useBlogEditorSubRouteData } from "~/features/blog-editor/useBlogEditorSubRouteData";
import type { UseMatchesMatch } from "~/types/useMatches";

export const links: LinksFunction = () => [];

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
