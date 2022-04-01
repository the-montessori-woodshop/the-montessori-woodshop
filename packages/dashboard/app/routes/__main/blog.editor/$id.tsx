import {
  GET_PostByIdApiParams,
  GET_PostByIdApiResponse,
  PATCH_UpdatePostByIdApiParams,
  PATCH_UpdatePostByIdApiRequest,
  PATCH_UpdatePostByIdApiResponse,
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
import { PageContainer } from "~/components/PageContainer";
import { PageContent } from "~/components/PageContent";
import { PageHeader } from "~/components/PageHeader";
import { PageTitle } from "~/components/PageTitle";
import { api } from "~/services/api.server";
import { forwardRef } from "react";
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
  const content = formData.get("content") as string;
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;

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
      body: {
        content,
        title,
        published: false,
      },
    });
    console.log(data);
    return redirect(`/blog/editor/${data.id}`);
  } catch (error) {}
  return null;
};

export default function Route() {
  const params = useParams<GET_PostByIdApiParams>();
  const data = useLoaderData<GET_PostByIdApiResponse>();

  return (
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
              <ChipText>{!data?.published ? "draft" : "published"}</ChipText>
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
              No prompt has been written yet. Open the "Meta" tab to add a
              prompt.
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
            <TabLink to="./meta">
              <TabText>Meta</TabText>
            </TabLink>
            <TabLink to="./actions">
              <TabText>Actions</TabText>
            </TabLink>
          </Tablist>
        </PageContent>
        <SDiv>
          <Outlet />
        </SDiv>
      </PageContainer>
    </Form>
  );
}
