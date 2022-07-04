import { useMatches } from "@remix-run/react/dist";
import type { Post } from "@woodshop/api";

export const useBlogEditorSubRouteData = () => {
  const matches = useMatches();
  const data = matches.find(
    (match) => match.id === "routes/__main/blog.editor/$id"
  )?.data;

  return data as Post;
};
