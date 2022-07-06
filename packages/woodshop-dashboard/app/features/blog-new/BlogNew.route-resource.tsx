import { redirect } from "@remix-run/cloudflare";
import type {
  POST_NewPostByIdApiRequest,
  POST_NewPostByIdApiResponse,
} from "@woodshop/api";
import { api } from "~/features/api";
import type { RemixFeatureResourceRoute } from "~/types/routes.types";

export const BlogNewRouteResource: RemixFeatureResourceRoute = {
  // if the UI hit's this route, just go back to the blog list page
  loader: async () => redirect("/blog"),
  // if an action POSTS, to this, create another post
  action: async ({ request }) => {
    try {
      const data = await api.post<
        POST_NewPostByIdApiResponse,
        POST_NewPostByIdApiRequest
      >({
        url: "/post",
        headers: request.headers,
        // @ts-ignore
        body: {
          title: "New post",
        },
      });
      return redirect(`/blog/editor/${data.id}`);
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
