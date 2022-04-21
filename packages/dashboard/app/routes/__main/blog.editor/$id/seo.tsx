import { Fieldset, FormFieldGroup } from "@woodshop/components";
import { Breadcrumb } from "~/components/Breadcrumb";
import { useBlogEditorSubRouteData } from "~/features/blog-editor/useBlogEditorSubRouteData";
import { UseMatchesMatch } from "~/types/useMatches";

export const handle = {
  breadcrumb: (data: UseMatchesMatch) => {
    return (
      <>
        <Breadcrumb to={`/blog/editor/${data.params?.id}/seo`} end>
          SEO
        </Breadcrumb>
      </>
    );
  },
};

export default function BlogEditorPageSEO() {
  const data = useBlogEditorSubRouteData();

  return (
    <div>
      <Fieldset cxLegend="Open Graph (Facebook, Slack, etc...)">
        <FormFieldGroup></FormFieldGroup>
      </Fieldset>
      <Fieldset cxLegend="JSON LD (Structured Content)">
        <FormFieldGroup></FormFieldGroup>
      </Fieldset>
      <Fieldset cxLegend="Twitter">
        <FormFieldGroup></FormFieldGroup>
      </Fieldset>
    </div>
  );
}
