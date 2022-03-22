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
  InputText,
  makeRem,
} from "@woodshop/components";
import { Close, Copy } from "@woodshop/icons";
import api, { ApiResponse } from "~/api/index";
import { ImagePaneContent } from "~/components/ImagePaneContent";
import { ImagesGridEditContent } from "~/components/ImagesGridEditContent";
import { ImagesGridEditTitle } from "~/components/ImagesGridEditTitle";
import { PageTitle } from "~/components/PageTitle";
import { dateFactory } from "~/utils/date-factory";
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
import styled from "styled-components";

type LoaderData = ApiResponse<typeof api.image.getImageById>;

export const loader: LoaderFunction = async ({ params }) => {
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

const SDiv = styled.div`
  display: flex;
  margin-top: ${makeRem(16)};
  padding-bottom: ${makeRem(16)};
  border-bottom: ${makeRem(1)} solid var(--color-grey3);
`;

const SImg = styled.img`
  width: 30%;
  height: auto;
  margin-right: ${makeRem(16)};
  border-radius: ${makeRem(4)};
  object-fit: contain;
  object-position: top;
`;

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
      </ImagesGridEditTitle>
      <ImagesGridEditContent>
        <ImagePaneContent>
          <SDiv>
            <SImg src={data?.url} alt={data?.title} />
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
                  {data?.create_at &&
                    dateFactory(data?.create_at, "dateAndTime")}
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
          </SDiv>
          <Form method="patch" action={`/images/${data?.id}`}>
            <FormFieldGroup>
              <InputText
                name="id"
                id="id"
                style={{
                  display: "none",
                }}
              />
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
                cxVariant="contained"
                cxColor="danger"
                type="button"
                disabled={transition.state === "submitting"}
              >
                Delete
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
