import { makeRem } from "@woodshop/components";
import { Breadcrumb, BreadcrumbSeparator } from "~/components/Breadcrumb";
import { MarkdownRendererProvider } from "~/components/MarkdownRenderer.context";
import { UseMatchesMatch } from "~/types/useMatches";
import { Outlet } from "remix";
import styled from "styled-components";

const EditorLayout = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
`;

export const handle = {
  breadcrumb: (data: UseMatchesMatch) => {
    return (
      <>
        <Breadcrumb to="/blog" end>
          Blog
        </Breadcrumb>
        <BreadcrumbSeparator />
        <Breadcrumb to={`/blog/editor/${data.params?.id}`}>
          {data.params?.id}
        </Breadcrumb>
      </>
    );
  },
};

export default function BlogEditorLayout() {
  return (
    <EditorLayout>
      <Outlet />
    </EditorLayout>
  );
}
