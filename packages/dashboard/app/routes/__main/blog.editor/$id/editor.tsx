import { makeRem } from "@woodshop/components";
import { Breadcrumb } from "~/components/Breadcrumb";
import { useMarkdownRendererContext } from "~/components/MarkdownRenderer.context";
import { UseMatchesMatch } from "~/types/useMatches";
import styled from "styled-components";

const SDiv = styled.div`
  height: 100%;
  width: 100%;
  background: var(--color-white);
  border-radius: ${makeRem(4)};
`;

const STextarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  font-family: Monaco;
  font-size: ${makeRem(14)};
  padding: 1rem;

  &:focus {
    outline: none;
  }
`;

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

  return (
    <SDiv>
      <STextarea
        name="content"
        onChange={(e) => setMarkdownSource(e.target.value)}
      />
    </SDiv>
  );
}
