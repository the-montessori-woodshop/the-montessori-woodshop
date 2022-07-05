import { redirect } from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";
import type { POST_NewImageApiResponse } from "@woodshop/api";
import {
  Button,
  ButtonGroup,
  FormFieldGroup,
  FormFieldImageDropzone,
} from "@woodshop/components";
import { Breadcrumb } from "~/components/breadcrumb";
import { api } from "~/features//api";
import type { RemixFeatureUIRoute } from "~/types/routes.types";
import clsx from "clsx";

export const ImagesNewRoute: RemixFeatureUIRoute = () => {
  return (
    <Form className={clsx("lmO0A93k", "container")}>
      <div className={clsx("lmO0A93k", "main")}>
        <FormFieldGroup cxLayout="stacked">
          <FormFieldImageDropzone />
        </FormFieldGroup>
      </div>
      <div className={clsx("lmO0A93k", "footer")}>
        <ButtonGroup>
          <Button cxColor="primary" cxVariant="contained" type="submit">
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
  const data = await api.postFormData<POST_NewImageApiResponse>(
    "/image",
    request
  );
  return redirect(`/images/${data.id}`);
};
