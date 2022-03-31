import { makeRem } from "@woodshop/components";
import { Breadcrumb, BreadcrumbSeparator } from "~/components/Breadcrumb";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { MarkdownRendererProvider } from "~/components/MarkdownRenderer.context";
import { UseMatchesMatch } from "~/types/useMatches";
import { Outlet, useMatches } from "remix";
import styled from "styled-components";

const EditorLayout = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
`;
const EditorLayoutContent = styled.div`
  width: ${makeRem(600)};
  height: 100%;
`;
const ELayoutPreviewCard = styled.div`
  background: var(--color-white);
  box-shadow: 0 2px 14px 5px rgba(228, 228, 228, 0.5);
  border-radius: ${makeRem(4)};
`;
const EditorLayoutPreview = styled.div`
  flex: 1;
  height: 100%;
  background: var(--color-grey1);
  border-left: ${makeRem(1)} solid var(--color-grey3);
  overflow-y: auto;

  ${ELayoutPreviewCard} {
    margin: ${makeRem(24)};
  }
`;

export const handle = {
  breadcrumb: (data: UseMatchesMatch) => {
    return (
      <>
        <Breadcrumb to="/blog" end>
          Blog
        </Breadcrumb>
        <BreadcrumbSeparator />
        {data.params?.id === "new" ? (
          <Breadcrumb to="/blog/editor/new">New</Breadcrumb>
        ) : (
          <Breadcrumb to={`/blog/editor/${data.params?.id}`}>
            Edit {data.params?.id}
          </Breadcrumb>
        )}
      </>
    );
  },
};

export default function BlogEditorLayout() {
  return (
    <EditorLayout>
      <MarkdownRendererProvider>
        <EditorLayoutContent>
          <Outlet />
        </EditorLayoutContent>
        <EditorLayoutPreview>
          <ELayoutPreviewCard>
            <MarkdownRenderer />
          </ELayoutPreviewCard>
        </EditorLayoutPreview>
      </MarkdownRendererProvider>
    </EditorLayout>
  );
}
