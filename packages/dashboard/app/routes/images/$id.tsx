import {
  Button,
  ButtonGroup,
  FormFieldGroup,
  FormFieldImageDropzone,
  FormFieldText,
  Icon,
  InputText,
  makeRem,
} from "@woodshop/components";
import { Close, Copy } from "@woodshop/icons";
import api, { ApiResponse } from "~/api/index";
import { ImagePaneContent } from "~/components/ImagePaneContent";
import { ImagesGridEditContent } from "~/components/ImagesGridEditContent";
import { ImagesGridEditTitle } from "~/components/ImagesGridEditTitle";
import { PageTitle } from "~/components/PageTitle";
import { useCallback } from "react";
import {
  ActionFunction,
  Form,
  LoaderFunction,
  redirect,
  useLoaderData,
  useNavigate,
  useTransition,
} from "remix";

type LoaderData = ApiResponse<typeof api.image.getImageById>;

export const loader: LoaderFunction = async ({ params }) => {
  console.log(params);

  if (!params.id) {
    throw new Error("Paramater ID doesn't edist");
  }

  const response = await api.image.getImageById(params.id);
  return response;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const { data: image } = await api.image.updateImage(
    formData.get("id") as string,
    {
      title: formData.get("title") as string,
    }
  );
  return redirect(`/images/${image.id}`);
};

export default function ImagesIdPage() {
  const navigate = useNavigate();
  const transition = useTransition();
  const { data } = useLoaderData<LoaderData>();

  const close = useCallback(() => {
    navigate("../");
  }, [navigate]);

  return (
    <>
      <ImagesGridEditTitle>
        <PageTitle>Edit an image</PageTitle>
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
      </ImagesGridEditTitle>
      <ImagesGridEditContent>
        <ImagePaneContent>
          <Form method="patch" action={`/images/${data?.id}`}>
            <FormFieldGroup>
              <InputText
                name="id"
                id="id"
                style={{
                  display: "none",
                }}
              />
              <FormFieldImageDropzone />
              <FormFieldText
                id="title"
                name="title"
                label="Image title"
                defaultValue={data?.title}
              />
              <FormFieldText
                id="url"
                name="url"
                label="Image url"
                defaultValue={data?.url}
                StartIcon={Copy}
                readOnly
                help="This is the URL where this image can be served. Click to copy."
              />
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
                {transition.state === "submitting" ? "Loading..." : "Update"}
              </Button>
            </ButtonGroup>
          </Form>
        </ImagePaneContent>
      </ImagesGridEditContent>
    </>
  );
}
