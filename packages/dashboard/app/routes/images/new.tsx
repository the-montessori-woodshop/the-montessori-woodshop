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
import { uploadFileToCloudflareImages } from "~/api/cloudflare.server";
import api from "~/api/index";
import { ImagePaneContent } from "~/components/ImagePaneContent";
import { ImagesGridEditContent } from "~/components/ImagesGridEditContent";
import { ImagesGridEditTitle } from "~/components/ImagesGridEditTitle";
import { PageTitle } from "~/components/PageTitle";
import { useCallback, useRef } from "react";
import {
  ActionFunction,
  Form,
  useNavigate,
  useSubmit,
  useTransition,
} from "remix";

const CF_ACCOUNT_ID = "68fa4421d84bfcddbd9311a7d57aa419";
const CF_IMAGE_API_TOKEN = "LDQmG3OPnuf8e7XRhvp3OJFC49-0L1klY4WPJ0sn";

export const action: ActionFunction = async ({ request }) => {
  // const requestFormData = await request.formData();
  const response = await api.image.createNewImage(request);
  // const cfFormData = new FormData();
  // cfFormData.append("file", requestFormData.get("file") as File);
  // const cfRes = await fetch(
  //   `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/images/v1`,
  //   {
  //     ...request,
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${CF_IMAGE_API_TOKEN}`,
  //     },
  //   }
  // );
  // const cfResponse = await cfRes.text();
  // console.log(cfResponse);
  // console.log(formData);
  // console.log(response);
  // const response = await uploadFileToCloudflareImages(
  //   formData,
  //   request.headers
  // );
  // console.log(response);

  return null;
};

export default function ImagesNew() {
  const navigate = useNavigate();
  const transition = useTransition();
  const submit = useSubmit();
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const close = useCallback(() => {
    navigate("../");
  }, [navigate]);

  const handleSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    async (event) => {
      if (inputFileRef.current?.files?.[0]) {
        const formData = new FormData();
        formData.append(
          "file",
          inputFileRef.current.files[0],
          inputFileRef.current.files[0].name
        );
        console.log(formData);
        submit(formData, {
          encType: "multipart/form-data",
          method: "post",
        });
      }
    },
    [submit]
  );

  return (
    <>
      <ImagesGridEditTitle>
        <PageTitle>Upload new image</PageTitle>
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
          <Form
            method="post"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <FormFieldGroup>
              <FormFieldImageDropzone name="file" ref={inputFileRef} />
              {/* <input type="file" name="file" /> */}
              {/* <FormFieldText id="title" name="title" label="Image title" /> */}
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
