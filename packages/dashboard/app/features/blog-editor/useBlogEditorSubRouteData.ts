import { Post } from "@woodshop/api";
import { useMatches } from "remix";

export const useBlogEditorSubRouteData = () => {
  const matches = useMatches();
  const data = matches.find(
    (match) => match.id === "routes/__main/blog.editor/$id"
  )?.data;

  return data as Post;
};
