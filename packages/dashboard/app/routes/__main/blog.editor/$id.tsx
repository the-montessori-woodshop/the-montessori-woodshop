import {
  GET_PostByIdApiParams,
  GET_PostByIdApiResponse,
  POST_NewPostByIdApiRequest,
  POST_NewPostByIdApiResponse,
} from "@woodshop/api";
import {
  Button,
  ButtonGroup,
  Icon,
  Tab,
  TabText,
  Tablist,
  makeRem,
} from "@woodshop/components";
import { Disk, Floppy } from "@woodshop/icons";
import { Chip } from "~/components/Chip";
import { ChipText } from "~/components/ChipText";
import { PageContainer } from "~/components/PageContainer";
import { PageContent } from "~/components/PageContent";
import { PageHeader } from "~/components/PageHeader";
import { PageTitle } from "~/components/PageTitle";
import { WoodshopClientResponse, api } from "~/services/api.server";
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
  height: ${makeRem(160)};
`;

const SDiv = styled.div`
  flex: 1;
  width: 100%;
  background: var(--color-grey2);
  border-top: ${makeRem(1)} solid var(--color-grey3);
  padding: ${makeRem(40)} ${makeRem(32)};
`;

export const loader: LoaderFunction = async ({ request, params }) => {
  try {
    if (params.id !== "new") {
      const res = await api.get<GET_PostByIdApiResponse, GET_PostByIdApiParams>(
        {
          url: "/post/:id",
          headers: request.headers,
          params: {
            id: params.id,
          },
        }
      );
      if (!res.data) {
        return redirect("/blog/editor/new");
      }
      return res;
    }
    return null;
  } catch (error) {
    return redirect("/blog/editor/new");
  }
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const content = formData.get("content") as string;
  const id = formData.get("id") as string;
  if (id === "new") {
    try {
      const res = await api.post<
        POST_NewPostByIdApiResponse,
        POST_NewPostByIdApiRequest
      >({
        url: "/post",
        headers: request.headers,
        body: {
          content: content || "",
          published: false,
          title: "",
        },
      });
      return redirect(`/blog/editor/${res.data.id}`);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  try {
    // const res = await api.update({
    //   url: "/post/:id",
    // })
  } catch (error) {}
  return null;
};

export default function Route() {
  const params = useParams<GET_PostByIdApiParams>();
  const loaderData =
    useLoaderData<
      WoodshopClientResponse<GET_PostByIdApiResponse | undefined>
    >();
  console.log(loaderData);

  return (
    <Form
      method="post"
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
            Click to edit new post title...
          </PageTitle>
          <ButtonGroup
            cxLayout="inline"
            style={{
              marginLeft: makeRem(32),
            }}
          >
            <Chip
              cxVariant={!loaderData?.data?.published ? "draft" : "published"}
            >
              <ChipText>
                {!loaderData?.data?.published ? "draft" : "published"}
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
          <SDiv2>content</SDiv2>
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
