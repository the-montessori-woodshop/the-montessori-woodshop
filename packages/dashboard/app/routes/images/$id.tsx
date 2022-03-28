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
import api, { ApiResponse } from "~/api/index";
import { ImagePaneContent } from "~/components/ImagePaneContent";
import { ImagesGridEditContent } from "~/components/ImagesGridEditContent";
import { ImagesGridEditTitle } from "~/components/ImagesGridEditTitle";
import { PageTitle } from "~/components/PageTitle";
import { dateFactory } from "~/utils/date-factory";
import { useCallback, useEffect } from "react";
import {
  ActionFunction,
  Form,
  LoaderFunction,
  redirect,
  useFormAction,
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
  if (!response.data?.id) {
    return redirect("../images");
  }
  return response;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const id = formData.get("id") as string;

  const title = formData.get("title") as string;
  if (id && title) {
    try {
      const response = await api.image.updateImage(id, {
        title,
      });
      return redirect(`/images/${response.data.id}`);
    } catch (error) {
      console.error(error);
    }
  }
  return null;
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

  useEffect(() => {}, [data?.id]);

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
          </SDiv>
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
