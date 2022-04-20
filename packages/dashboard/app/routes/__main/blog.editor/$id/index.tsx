import {
  FormFieldGroup,
  FormFieldText,
  FormFieldTextarea,
} from "@woodshop/components";
import { useBlogEditorSubRouteData } from "~/features/blog-editor/useBlogEditorSubRouteData";

export default function BlogEditorPageIndex() {
  const data = useBlogEditorSubRouteData();

  return (
    <FormFieldGroup>
      <FormFieldText
        id="title"
        name="title"
        label="Title"
        placeholder="Title of the blog post"
        defaultValue={data?.title}
      />
      <FormFieldTextarea
        id="prompt"
        name="prompt"
        label="Prompt"
        placeholder="Introductory text of the blog post for quick previews"
        key={data?.prompt}
        defaultValue={data?.prompt}
      />
    </FormFieldGroup>
  );
}
