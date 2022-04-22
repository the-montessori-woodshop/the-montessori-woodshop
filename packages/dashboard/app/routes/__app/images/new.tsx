import type { ActionFunction, LinksFunction } from "@remix-run/cloudflare";
import type { POST_NewImageApiResponse } from "@woodshop/api";
import {
  Button,
  ButtonGroup,
  FormFieldGroup,
  FormFieldImageDropzone,
  FormFieldText,
  Icon,
  makeRem,
} from "@woodshop/components";
import { Close } from "@woodshop/icons";
import { Breadcrumb } from "~/components/Breadcrumb";
import { ImagePaneContent } from "~/components/images/ImagePaneContent";
import { ImagesGridEditContent } from "~/components/images/ImagesGridEditContent";
import { ImagesGridEditTitle } from "~/components/images/ImagesGridEditTitle";
import { PageHeader } from "~/components/page/PageHeader";
import { PageTitle } from "~/components/page/PageTitle";
import { api } from "~/services/api.server";
import { useCallback } from "react";
import { Form, redirect, useNavigate, useTransition } from "remix";

export const links: LinksFunction = () => [
  ImagePaneContent.links,
  ImagesGridEditContent.links,
  ImagesGridEditTitle.links,
  PageHeader.links,
  PageTitle.links,
];

export const handle = {
  breadcrumb: () => {
    return <Breadcrumb to="/images/new">New</Breadcrumb>;
  },
};

export const action: ActionFunction = async ({ request }) => {
  const data = await api.postFormData<POST_NewImageApiResponse>(
    "/image",
    request
  );
  return redirect(`/images/${data.id}`);
};

export default function ImagesNew() {
  const navigate = useNavigate();
  const transition = useTransition();

  const close = useCallback(() => {
    navigate("../");
  }, [navigate]);

  return (
    <>
      <ImagesGridEditTitle>
        <PageHeader>
          <PageTitle>Upload new image</PageTitle>
          <Button
            onClick={close}
            style={{
              position: "absolute",
              right: makeRem(24),
              top: makeRem(32),
            }}
          >
            <Icon cxTitle="close-panel" cxSize={36}>
              <Close />
            </Icon>
          </Button>
        </PageHeader>
      </ImagesGridEditTitle>
      <ImagesGridEditContent>
        <ImagePaneContent>
          <Form method="post" encType="multipart/form-data">
            <FormFieldGroup>
              <FormFieldImageDropzone name="file" />
              <FormFieldText id="title" name="title" label="Image title" />
            </FormFieldGroup>
            <br />
            <br />
            <ButtonGroup
              cxLayout="inline"
              style={{
                justifyContent: "flex-end",
              }}
            >
              <Button
                cxVariant="text"
                cxColor="primary"
                type="button"
                disabled={transition.state === "submitting"}
              >
                Cancel
              </Button>
              <Button
                cxVariant="contained"
                cxColor="primary"
                type="submit"
                disabled={transition.state === "submitting"}
              >
                {transition.state === "submitting" ? "Loading..." : "Create"}
              </Button>
            </ButtonGroup>
          </Form>
        </ImagePaneContent>
      </ImagesGridEditContent>
    </>
  );
}