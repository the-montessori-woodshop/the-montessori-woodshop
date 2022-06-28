import { Form, useNavigate, useTransition } from "@remix-run/react";
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
import { ImagePaneContent } from "~/components/images/ImagePaneContent";
import { ImagesGridEditContent } from "~/components/images/ImagesGridEditContent";
import { ImagesGridEditTitle } from "~/components/images/ImagesGridEditTitle";
import { PageHeader } from "~/components/page/PageHeader";
import { PageTitle } from "~/components/page/PageTitle";
import { useCallback } from "react";

import type { RemixFeatureRoute } from "../_routes/routes.types";
import routeStyles from "./AppImagesNew.css";

export const AppImagesNewRoute: RemixFeatureRoute = () => {
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
};

AppImagesNewRoute.links = () => [];
