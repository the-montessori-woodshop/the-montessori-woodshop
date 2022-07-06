import { redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
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
  DescriptionListGroup,
  DescriptionListGroupTitle,
  DescriptionListItem,
  DescriptionListItemData,
  DescriptionListItemTag,
  Icon,
  InputText,
  TypographyHeading,
  dateFactory,
  makeRem,
} from "@woodshop/components";
import { Copy, Pencil, Trash } from "@woodshop/icons";
import { Breadcrumb } from "~/components/breadcrumb/Breadcrumb";
import { api } from "~/features/api/api.server";
import type { RemixFeatureUIRoute } from "~/types/routes.types";
import type { UseMatchesMatch } from "~/types/useMatches";
import { useCopyToClipboard } from "~/utils/useCopyToClipboard";
import clsx from "clsx";

export const ImagesEntityRoute: RemixFeatureUIRoute = () => {
  const data = useLoaderData<PATCH_ImagesApiResponse | null>();
  const { inputRef, handleCopy } = useCopyToClipboard();

  if (data === null) {
    return <>Uh oh, we can't find that image</>;
  }

  return (
    <>
      <img src={data.url} alt={data.title} className={clsx("LNm9OUO", "img")} />
      <div className={clsx("LNm9OUO", "header")}>
        <TypographyHeading
          cxVariant="h4"
          cxNode="div"
          title={data.title}
          style={{
            fontWeight: 600,
            margin: 0,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            paddingRight: makeRem(16),
          }}
        >
          {data.title}
        </TypographyHeading>
        <ButtonGroup cxLayout="inline">
          <Button
            style={{
              border: "1px solid var(--color-grey4)",
              borderRadius: makeRem(4),
            }}
          >
            <Icon
              cxTitle="edit image"
              accessibility="actionable"
              cxTitleId="edit-image"
            >
              <Pencil />
            </Icon>
          </Button>
          <Button
            style={{
              border: "1px solid var(--color-grey4)",
              borderRadius: makeRem(4),
            }}
          >
            <Icon
              cxTitle="delete image"
              accessibility="actionable"
              cxTitleId="delete-iamge"
            >
              <Trash />
            </Icon>
          </Button>
        </ButtonGroup>
      </div>
      <div className={clsx("LNm9OUO", "copy")}>
        <InputText
          readOnly
          StartIcon={Copy}
          value={data.url}
          onClick={handleCopy}
          ref={inputRef}
          style={{
            cursor: "pointer",
            background: "var(--color-white)",
          }}
        />
      </div>
      <DescriptionListGroup>
        <DescriptionListGroupTitle>Information</DescriptionListGroupTitle>
        <DescriptionList>
          <DescriptionListItem>
            <DescriptionListItemTag>Name</DescriptionListItemTag>
            <DescriptionListItemData>{data.title}</DescriptionListItemData>
          </DescriptionListItem>
          <DescriptionListItem>
            <DescriptionListItemTag>Service ID</DescriptionListItemTag>
            <DescriptionListItemData>{data.service_id}</DescriptionListItemData>
          </DescriptionListItem>
          <DescriptionListItem>
            <DescriptionListItemTag>Created</DescriptionListItemTag>
            <DescriptionListItemData>
              {dateFactory(data.created_at, "longDate")}
            </DescriptionListItemData>
          </DescriptionListItem>
          <DescriptionListItem>
            <DescriptionListItemTag>Last Updated</DescriptionListItemTag>
            <DescriptionListItemData>
              {dateFactory(data.updated_at, "longDate")}
            </DescriptionListItemData>
          </DescriptionListItem>
        </DescriptionList>
      </DescriptionListGroup>
      {/* <DescriptionListGroup>
        <DescriptionListGroupTitle>Meta Data</DescriptionListGroupTitle>
        <DescriptionList>
          <DescriptionListItem>
            <DescriptionListItemTag>tag</DescriptionListItemTag>
            <DescriptionListItemData>label</DescriptionListItemData>
          </DescriptionListItem>
          <DescriptionListItem>
            <DescriptionListItemTag>tag</DescriptionListItemTag>
            <DescriptionListItemData>label</DescriptionListItemData>
          </DescriptionListItem>
          <DescriptionListItem>
            <DescriptionListItemTag>tag</DescriptionListItemTag>
            <DescriptionListItemData>label</DescriptionListItemData>
          </DescriptionListItem>
        </DescriptionList>
      </DescriptionListGroup> */}
    </>
  );
};

ImagesEntityRoute.action = async ({ request }) => {
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
    throw new Error(error as string);
  }
};

ImagesEntityRoute.handle = {
  breadcrumb: (match: UseMatchesMatch) => {
    return (
      <Breadcrumb to={`/images/${match?.params.id}`}>
        {match?.params.id}
      </Breadcrumb>
    );
  },
};

ImagesEntityRoute.loader = async ({ params, request }) => {
  try {
    const data = await api.get<
      GET_ImageByIdApiResponse,
      GET_ImageByIdApiParams
    >({
      headers: request.headers,
      url: "/image/:id",
      params: {
        id: params.id,
      },
    });

    return data;
  } catch (error) {
    return null;
  }
};
