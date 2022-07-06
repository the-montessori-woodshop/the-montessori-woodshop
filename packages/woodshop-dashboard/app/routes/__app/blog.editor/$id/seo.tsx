import { Fieldset, FormFieldGroup, FormFieldText } from "@woodshop/components";
import { Breadcrumb } from "~/components/breadcrumb/Breadcrumb";
import { useBlogEditorSubRouteData } from "~/features/blog-editor-entity/useBlogEditorSubRouteData";
import type { UseMatchesMatch } from "~/types/useMatches";

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
        <FormFieldGroup>
          <input type="hidden" name="og_type" value="article" />
          <FormFieldText
            id="og_title"
            name="og_title"
            label="OG Titlte"
            defaultValue={data?.og_title || ""}
          />
        </FormFieldGroup>
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
