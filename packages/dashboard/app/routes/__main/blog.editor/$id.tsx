import {
  GET_PostByIdApiParams,
  GET_PostByIdApiResponse,
  PATCH_UpdatePostByIdApiParams,
  PATCH_UpdatePostByIdApiRequest,
  PATCH_UpdatePostByIdApiResponse,
  Post,
} from "@woodshop/api";
import {
  Button,
  ButtonGroup,
  Icon,
  Tab,
  TabText,
  Tablist,
  TypographyCopy,
  makeRem,
} from "@woodshop/components";
import { Floppy } from "@woodshop/icons";
import { Chip } from "~/components/Chip";
import { ChipText } from "~/components/ChipText";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { MarkdownRendererProvider } from "~/components/MarkdownRenderer.context";
import { PageContainer } from "~/components/PageContainer";
import { PageContent } from "~/components/PageContent";
import { PageHeader } from "~/components/PageHeader";
import { PageTitle } from "~/components/PageTitle";
import { api } from "~/services/api.server";
import { forwardRef } from "react";
import { useState } from "react";
import {
  ActionFunction,
  Form,
  LoaderFunction,
  NavLink,
  NavLinkProps,
  Outlet,
  redirect,
  useLoaderData,
  useParams,
} from "remix";
import styled from "styled-components";

const TabLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function TabLink(
  { children, ...restProps },
  ref
) {
  return (
    <NavLink {...restProps} ref={ref}>
      {({ isActive }) => <Tab isActive={isActive}>{children}</Tab>}
    </NavLink>
  );
});

const SDiv2 = styled.div`
  max-height: ${makeRem(160)};
`;

const SDiv = styled.div`
  flex: 1;
  width: 100%;
  background: var(--color-grey1);
  border-top: ${makeRem(1)} solid var(--color-grey3);
  padding: ${makeRem(40)} ${makeRem(32)};
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

export const loader: LoaderFunction = async ({ request, params }) => {
  try {
    const data = await api.get<GET_PostByIdApiResponse, GET_PostByIdApiParams>({
      url: "/post/:id",
      headers: request.headers,
      params: {
        id: params.id,
      },
    });
    if (!data) {
      return redirect("/blog");
    }
    return data;
  } catch (error) {
    return redirect("/blog");
  }
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const id = formData.get("id") as string;

  const formDataObject = Object.fromEntries(formData.entries());
  const body = Object.fromEntries(
    Object.entries(formDataObject).filter(
      ([key, value]) => Boolean(value) && key !== "id"
    )
  ) as unknown as PATCH_UpdatePostByIdApiRequest;

  try {
    const data = await api.update<
      PATCH_UpdatePostByIdApiResponse,
      PATCH_UpdatePostByIdApiRequest,
      PATCH_UpdatePostByIdApiParams
    >({
      url: "/post/:id",
      method: "PATCH",
      params: {
        id,
      },
      headers: request.headers,
      body: body,
    });
    return redirect(`/blog/editor/${data.id}`);
  } catch (error) {}
  return null;
};

export default function Route() {
  const params = useParams<GET_PostByIdApiParams>();
  const data = useLoaderData<Post>();
  const [postContent, setPostContent] = useState(data);

  return (
    <MarkdownRendererProvider initMarkdownSource={data?.content || ""}>
      <EditorLayoutContent>
        <Form
          method="patch"
          style={{
            display: "inherit",
            flex: "inherit",
            height: "100%",
            flexDirection: "inherit",
          }}
        >
          <input type="hidden" name="id" value={params.id} />
          <PageContainer>
            <PageHeader>
              <PageTitle
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {data?.title}
              </PageTitle>
              <ButtonGroup
                cxLayout="inline"
                style={{
                  marginLeft: makeRem(32),
                }}
              >
                <Chip cxVariant={!data?.published ? "draft" : "published"}>
                  <ChipText>
                    {!data?.published ? "draft" : "published"}
                  </ChipText>
                </Chip>
                <Button type="submit">
                  <Icon cxTitle="save" accessibility="actionable" cxSize={32}>
                    <Floppy />
                  </Icon>
                </Button>
              </ButtonGroup>
            </PageHeader>
            <PageContent>
              <SDiv2>
                <TypographyCopy cxVariant="caption">
                  {data.prompt || "-- --"}
                </TypographyCopy>
              </SDiv2>
            </PageContent>
            <PageContent
              style={{
                position: "relative",
                top: makeRem(42 / 2),
              }}
            >
              <Tablist
                ariaLabel="testing"
                cxLayout="horizontal"
                cxVariant="contained"
                cxSize="sm"
              >
                <TabLink to={`/blog/editor/${params.id}`} end>
                  <TabText>Details</TabText>
                </TabLink>
                <TabLink to="./editor" end>
                  <TabText>Editor</TabText>
                </TabLink>
                <TabLink to="./seo">
                  <TabText>SEO</TabText>
                </TabLink>
                <TabLink to="./actions">
                  <TabText>Actions</TabText>
                </TabLink>
                <TabLink to="./images">
                  <TabText>Images</TabText>
                </TabLink>
              </Tablist>
            </PageContent>
            <SDiv>
              <Outlet />
            </SDiv>
          </PageContainer>
        </Form>
      </EditorLayoutContent>
      <EditorLayoutPreview>
        <ELayoutPreviewCard>
          <MarkdownRenderer post={data} />
        </ELayoutPreviewCard>
      </EditorLayoutPreview>
    </MarkdownRendererProvider>
  );
}
