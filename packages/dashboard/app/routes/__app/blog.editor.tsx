import type { LinksFunction } from "@remix-run/cloudflare";
import { Breadcrumb, BreadcrumbSeparator } from "~/components/Breadcrumb";
import { createRouteLinkStyles } from "~/features/routes/routes.createRouteLinkStyles";
import type { UseMatchesMatch } from "~/types/useMatches";
import { Outlet } from "remix";

import styles from "./blog.editor.css";

export const links: LinksFunction = () => [createRouteLinkStyles(styles)];

export const handle = {
  breadcrumb: (data: UseMatchesMatch) => {
    return (
      <>
        <Breadcrumb to="/blog" end>
          Blog
        </Breadcrumb>
        <BreadcrumbSeparator />
        <Breadcrumb to={`/blog/editor/${data.params?.id}`}>
          {data.params?.id}
        </Breadcrumb>
      </>
    );
  },
};

export default function BlogEditorLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
