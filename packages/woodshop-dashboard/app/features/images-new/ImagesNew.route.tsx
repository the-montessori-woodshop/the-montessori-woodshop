import { redirect } from "@remix-run/cloudflare";
import { Form, useTransition } from "@remix-run/react";
import type { POST_NewImageApiResponse } from "@woodshop/api";
import {
  Button,
  ButtonGroup,
  FormFieldGroup,
  FormFieldImageDropzone,
  FormFieldText,
} from "@woodshop/components";
import { Breadcrumb } from "~/components/breadcrumb";
import { api } from "~/features//api";
import type { RemixFeatureUIRoute } from "~/types/routes.types";
import clsx from "clsx";

export const ImagesNewRoute: RemixFeatureUIRoute = () => {
  const transition = useTransition();

  return (
    <Form
      method="post"
      encType="multipart/form-data"
      className={clsx("lmO0A93k", "container")}
    >
      <div className={clsx("lmO0A93k", "main")}>
        <FormFieldGroup>
          <FormFieldImageDropzone name="file" />
          <FormFieldText id="title" name="title" label="Image title" />
        </FormFieldGroup>
      </div>
      <div className={clsx("lmO0A93k", "footer")}>
        <ButtonGroup>
          <Button
            cxColor="primary"
            cxVariant="contained"
            type="submit"
            disabled={transition.state === "submitting"}
          >
            Create Image
          </Button>
        </ButtonGroup>
      </div>
    </Form>
  );
};

ImagesNewRoute.handle = {
  breadcrumb: () => {
    return <Breadcrumb to="/images/new">New</Breadcrumb>;
  },
};

ImagesNewRoute.action = async ({ request }) => {
  try {
    const data = await api.postMultipartFormData<POST_NewImageApiResponse>(
      "/image",
      request
    );
    return redirect(`/images/${data.id}`);
  } catch (error) {
    console.log(error);
    return null;
  }
};
