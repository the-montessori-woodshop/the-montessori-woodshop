import { useMatches } from "@remix-run/react";
import type { Post } from "@woodshop/api";

export const useBlogEditorSubRouteData = () => {
  const matches = useMatches();
  const data = matches.find(
    (match) => match.id === "routes/__app/blog.editor/$id"
  )?.data;

  return data as Post;
};
