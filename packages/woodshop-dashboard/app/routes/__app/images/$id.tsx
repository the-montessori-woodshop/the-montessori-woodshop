import type {
  ActionFunction,
  LinksFunction,
  LoaderFunction,
} from "@remix-run/cloudflare";
import type {
  GET_ImageByIdApiParams,
  GET_ImageByIdApiResponse,
  PATCH_ImagesApiParams,
  PATCH_ImagesApiRequest,
  PATCH_ImagesApiResponse,
} from "@woodshop/api";
import {
  Button,
  ButtonGroup,
  DescriptionList,
  DescriptionListItem,
  DescriptionListItemData,
  DescriptionListItemTag,
  FormFieldGroup,
  FormFieldText,
  Icon,
  makeRem,
} from "@woodshop/components";
import { Close, Copy } from "@woodshop/icons";
import { Breadcrumb } from "~/components/Breadcrumb";
import { ImagePaneContent } from "~/components/images/ImagePaneContent";
import { ImagesGridEditContent } from "~/components/images/ImagesGridEditContent";
import { ImagesGridEditTitle } from "~/components/images/ImagesGridEditTitle";
import { PageHeader } from "~/components/page/PageHeader";
import { PageTitle } from "~/components/page/PageTitle";
import { createRouteLinkStyles } from "~/features/_routes/routes.createRouteLinkStyles";
import { api } from "~/services/api.server";
import type { UseMatchesMatch } from "~/types/useMatches";
import { dateFactory } from "~/utils/date-factory";
import { useCallback, useEffect } from "react";
import { redirect } from "@remix-run/cloudflare";
import { Form, useFormAction, useLoaderData, useNavigate, useTransition } from "@remix-run/react";

import pageStyles from "./$id.css";

export const links: LinksFunction = () => [
  ImagePaneContent.links,
  ImagesGridEditContent.links,
  ImagesGridEditContent.links,
  PageHeader.links,
  PageTitle.links,
  createRouteLinkStyles(pageStyles),
];

export const handle = {
  breadcrumb: (match: UseMatchesMatch) => {
    return (
      <Breadcrumb to={`/images/${match?.params.id}`}>
        {match?.params.id}
      </Breadcrumb>
    );
  },
};

export const loader: LoaderFunction = async ({ params, request }) => {
  const data = await api.get<GET_ImageByIdApiResponse, GET_ImageByIdApiParams>({
    headers: request.headers,
    url: "/image/:id",
    params: {
      id: params.id,
    },
  });

  if (!data?.id) {
    return redirect("../images");
  }
  return data;
};

export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();

    const data = await api.update<
      PATCH_ImagesApiResponse,
      PATCH_ImagesApiRequest,
      PATCH_ImagesApiParams
    >({
      url: "/image/:id",
      method: "PATCH",
      headers: request.headers,
      params: {
        id: formData.get("id") as string,
      },
      body: {
        title: formData.get("title") as string,
      },
    });
    return redirect(`/images/${data.id}`);
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
};

export default function ImagesIdPage() {
  const navigate = useNavigate();
  const transition = useTransition();
  const data = useLoaderData<PATCH_ImagesApiResponse>();

  const close = useCallback(() => {
    navigate("../");
  }, [navigate]);

  useEffect(() => {}, [data?.id]);

  return (
    <>
      <ImagesGridEditTitle>
        <PageHeader>
          <PageTitle>{data?.title}</PageTitle>
          <Button
            onClick={close}
            style={{
              position: "absolute",
              right: makeRem(24),
              top: makeRem(32),
            }}
          >
            <Icon cxTitle="close-panel" cxSize={32}>
              <Close />
            </Icon>
          </Button>
        </PageHeader>
      </ImagesGridEditTitle>
      <ImagesGridEditContent>
        <ImagePaneContent>
          <div className="pane-container">
            <img src={data?.url} alt={data?.title} />
            <DescriptionList>
              <DescriptionListItem>
                <DescriptionListItemTag>Title</DescriptionListItemTag>
                <DescriptionListItemData>{data?.title}</DescriptionListItemData>
              </DescriptionListItem>
              <DescriptionListItem>
                <DescriptionListItemTag>Cloudflare ID</DescriptionListItemTag>
                <DescriptionListItemData>
                  {data?.service_id}
                </DescriptionListItemData>
              </DescriptionListItem>
              <DescriptionListItem>
                <DescriptionListItemTag>Created On</DescriptionListItemTag>
                <DescriptionListItemData>
                  {data?.created_at &&
                    dateFactory(data?.created_at, "dateAndTime")}
                </DescriptionListItemData>
              </DescriptionListItem>
              <DescriptionListItem>
                <DescriptionListItemTag>Last updated</DescriptionListItemTag>
                <DescriptionListItemData>
                  {data?.updated_at &&
                    dateFactory(data?.updated_at, "dateAndTime")}
                </DescriptionListItemData>
              </DescriptionListItem>
            </DescriptionList>
          </div>
          <Form method="patch">
            <FormFieldGroup>
              <input type="hidden" name="id" value={data?.id} />
              <FormFieldText
                id="title"
                name="title"
                label="Image title"
                defaultValue={data?.title}
                key={data?.title}
              />
              <FormFieldText
                id="url"
                name="url"
                label="Image url"
                defaultValue={data?.url}
                key={data?.url}
                StartIcon={Copy}
                readOnly
                help="This is the URL where this image can be served. Click to copy."
              />
            </FormFieldGroup>
            <br />
            <br />
            <ButtonGroup cxLayout="inline" cxOrder="reversed">
              <Button
                cxVariant="contained"
                cxColor="primary"
                type="submit"
                disabled={transition.state === "submitting"}
              >
                {transition.state === "submitting" ? "Loading..." : "Update"}
              </Button>
              <Button
                cxVariant="text"
                cxColor="danger"
                formAction={useFormAction(`delete`)}
                type="submit"
                disabled={transition.state === "submitting"}
              >
                Delete
              </Button>
            </ButtonGroup>
          </Form>
        </ImagePaneContent>
      </ImagesGridEditContent>
    </>
  );
}
