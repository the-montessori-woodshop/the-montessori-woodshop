import { redirect } from "@remix-run/cloudflare";
import { Form, Outlet, useLoaderData, useParams } from "@remix-run/react";
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
  makeRem,
} from "@woodshop/components";
import { Floppy, Trash } from "@woodshop/icons";
import { Chip } from "~/components/chip/Chip";
import { ChipText } from "~/components/chip/ChipText";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { MarkdownRendererProvider } from "~/components/MarkdownRenderer.context";
import { TabLink } from "~/components/tab/TabLink";
import { api } from "~/features/api/api.server";
import { Page, PageBody, PageHeader, PageHeaderTitle } from "~/features/page";
import type { RemixFeatureUIRoute } from "~/types/routes.types";
import clsx from "clsx";

export const BlogEditorEntityRouteLayout: RemixFeatureUIRoute = () => {
  const params = useParams<GET_PostByIdApiParams>();
  const data = useLoaderData<Post>();

  return (
    <Page>
      <PageHeader>
        <div className={clsx("wmtbNX", "title")}>
          <PageHeaderTitle>{data.title}</PageHeaderTitle>
          <Chip cxVariant={!data?.published ? "draft" : "published"}>
            <ChipText>{!data?.published ? "draft" : "published"}</ChipText>
          </Chip>
        </div>
        <ButtonGroup cxLayout="inline">
          <Button
            type="submit"
            style={{
              border: `1px solid var(--color-grey4)`,
              borderRadius: makeRem(4),
            }}
          >
            <Icon cxTitle="save" accessibility="actionable">
              <Floppy />
            </Icon>
          </Button>
          <Button
            type="button"
            style={{
              border: `1px solid var(--color-grey4)`,
              borderRadius: makeRem(4),
            }}
          >
            <Icon cxTitle="delete" accessibility="actionable">
              <Trash />
            </Icon>
          </Button>
        </ButtonGroup>
      </PageHeader>
      <PageBody>
        <MarkdownRendererProvider initMarkdownSource={data?.content || ""}>
          <div className={clsx("wmtbNX", "main")}>
            <div className={clsx("wmtbNX", "pane")}>
              <Form method="patch" className={clsx("wmtbNX", "pane-form")}>
                <input type="hidden" name="id" value={params.id} />
                <div className={clsx("wmtbNX", "pane-tabs")}>
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
                </div>
                <div className={clsx("wmtbNX", "pane-content")}>
                  <Outlet />
                </div>
              </Form>
            </div>
            <div className={clsx("wmtbNX", "preview")}>
              <div className={clsx("wmtbNX", "preview-card")}>
                <MarkdownRenderer post={data} />
              </div>
            </div>
          </div>
        </MarkdownRendererProvider>
      </PageBody>
    </Page>
  );
};

BlogEditorEntityRouteLayout.loader = async ({ request, params }) => {
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

BlogEditorEntityRouteLayout.action = async ({ request }) => {
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
