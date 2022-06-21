import type { LinksFunction } from "@remix-run/cloudflare";
import type {
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
  TabText,
  Tablist,
  TypographyCopy,
  makeRem,
} from "@woodshop/components";
import { Floppy } from "@woodshop/icons";
import { Chip } from "~/components/chip/Chip";
import { ChipText } from "~/components/chip/ChipText";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { MarkdownRendererProvider } from "~/components/MarkdownRenderer.context";
import { PageContainer } from "~/components/page/PageContainer";
import { PageContent } from "~/components/page/PageContent";
import { PageHeader } from "~/components/page/PageHeader";
import { PageTitle } from "~/components/page/PageTitle";
import { TabLink } from "~/components/tab/TabLink";
import { createRouteLinkStyles } from "~/features/_routes/routes.createRouteLinkStyles";
import { api } from "~/services/api.server";
import type { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/cloudflare";
import { Form, Outlet, useLoaderData, useParams } from "@remix-run/react";

import pageStyles from "./$id.css";

export const links: LinksFunction = () => [
  Chip.links,
  ChipText.links,
  PageContainer.links,
  PageContent.links,
  PageHeader.links,
  PageTitle.links,
  createRouteLinkStyles(pageStyles),
];

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

  return (
    <MarkdownRendererProvider initMarkdownSource={data?.content || ""}>
      <div className="layout-content">
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
              <div className="content">
                <TypographyCopy cxVariant="caption">
                  {data.prompt || "-- --"}
                </TypographyCopy>
              </div>
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
            <div className="outlet">
              <Outlet />
            </div>
          </PageContainer>
        </Form>
      </div>
      <div className="editor-layout">
        <div className="card">
          <MarkdownRenderer post={data} />
        </div>
      </div>
    </MarkdownRendererProvider>
  );
}
