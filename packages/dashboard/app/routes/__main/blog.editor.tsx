import {
  TopNav,
  TopNavList,
  TopNavListItem,
  TopNavSection,
  makeRem,
} from "@woodshop/components";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { MarkdownRendererProvider } from "~/components/MarkdownRenderer.context";
import { Outlet } from "remix";
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

export default function BlogEditorLayout() {
  return (
    <>
      <TopNav>
        <TopNavSection>
          <TopNavList>
            <TopNavListItem>Blog Editor</TopNavListItem>
          </TopNavList>
        </TopNavSection>
      </TopNav>
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
    </>
  );
}
