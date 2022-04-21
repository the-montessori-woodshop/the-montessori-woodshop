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
        defaultValue={data.title}
      />
      <FormFieldTextarea
        id="prompt"
        name="prompt"
        label="Prompt"
        placeholder="Introductory text of the blog post for quick previews"
        key={data.prompt}
        defaultValue={data.prompt}
      />
      <FormFieldText
        id="banner_img_url"
        name="banner_img_url"
        label="Banner image URL"
        key={data.banner_img_url}
        defaultValue={data.banner_img_url}
      />
      {/* <FormFieldText
        id="banner_img_alt"
        name="banner_img_alt"
        label="Banner image alt text"
        key={data.banner_img_alt}
        defaultValue={data.banner_img_alt}
      /> */}
    </FormFieldGroup>
  );
}
