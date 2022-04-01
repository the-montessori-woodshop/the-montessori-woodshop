import type { GET_PostByIdApiResponse } from "@woodshop/api";
import {
  FormFieldGroup,
  FormFieldText,
  FormFieldTextarea,
  TypographyCopy,
} from "@woodshop/components";
import { useBlogEditorSubRouteData } from "~/features/blog-editor/useBlogEditorSubRouteData";
import { useMatches } from "remix";

export default function BlogEditorPageIndex() {
  const data = useBlogEditorSubRouteData();

  console.log(data);

  return <div>{JSON.stringify(data, null, 4)}</div>;
}
